import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() createRegisterDto: CreateRegisterDto) {
    console.log(createRegisterDto);
    return this.authService.register(createRegisterDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
