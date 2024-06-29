import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateRegisterDto } from './dto/create-register.dto';

import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createRegisterDto: CreateRegisterDto) {
    const user = await this.usersService.findOneByEmail(
      createRegisterDto.email,
    );

    if (user) {
      throw new BadRequestException('user already exists');
    }
    const { name, email, password } = createRegisterDto;

    const rol = 'user';

    return await this.usersService.create({
      name,
      email,
      password: await bcryptjs.hash(password, 10),
      rol,
    });
  }

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('email is wrong');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('password is wrong');
    }

    const payload = { email: user.email };

    const token = await this.jwtService.signAsync(payload);

    return { token, email };
  }
}
