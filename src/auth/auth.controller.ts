import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';
import { Role } from './enums/role.enum';
import { Auth } from './decorators/auth.decorator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

interface RequestWithUser extends Request {
  user: {
    email: string;
    role: string;
  };
}

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new User' })
  @ApiResponse({ status: 200, description: 'Create a new User' })
  @ApiResponse({ status: 401, description: 'Unathorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  register(@Body() createRegisterDto: CreateRegisterDto) {
    console.log(createRegisterDto);
    return this.authService.register(createRegisterDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login with a User, returns JWT' })
  @ApiResponse({ status: 200, description: 'Create a new User' })
  @ApiResponse({ status: 401, description: 'Unathorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('profile')
  @Auth(Role.ADMIN)
  @ApiOperation({ summary: 'Show User Profile information with ADMIN Role' })
  @ApiResponse({ status: 200, description: 'Create a new User' })
  @ApiResponse({ status: 401, description: 'Unathorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  profile(@Req() req: RequestWithUser) {
    return this.authService.profile(req.user);
  }
}
