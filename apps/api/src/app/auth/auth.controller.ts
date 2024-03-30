import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { CurrentUser } from '@issp/api-auth';
import { User } from '@prisma/client';
import { UserService } from './services/user.service';
import { UserEntity } from '../admin/users/entities/user.entity';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private userService: UserService
  ) {}
  // @Post('login')
  // @ApiOkResponse({ type: AuthEntity })
  // login(@Body() { email, password }: LoginDto) {
  //   return this.authService.login(email, password);
  // }

  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authService.login(
      await this.authService.validate(body.email, body.password)
    );
  }

  @Post('refresh-token')
  async refreshToken(@Body('refreshToken') refreshToken: string) {
    return this.authService.loginWithRefreshToken(refreshToken);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: UserEntity })
  async me(@CurrentUser() user: User) {
    return new UserEntity(await this.userService.getUserByEmail(user.email));
  }
}
