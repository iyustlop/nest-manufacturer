import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateRegisterDto } from './dto/create-register.dto';

import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

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

  login() {
    return 'login';
  }
}
