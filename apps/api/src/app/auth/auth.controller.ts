import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { Public, CurrentUser } from '@issp/api-auth';
import { User } from '@prisma/client';
import { UserService } from '../user/user.service';
import { AuthEntity } from './entity/auth.entity';
import { checkAbilities } from './casl/abilities.decorator';
import { AbilitiesGuard } from './casl/abilities.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private userService: UserService
  ) {}

  @HttpCode(200)
  @Public()
  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authService.login(
      await this.authService.validate(body.email, body.password),
      body.rememberMe
    );
  }

  @Public()
  @Post('refresh-token')
  async refreshToken(@Body('refreshToken') refreshToken: string) {
    return this.authService.loginWithRefreshToken(refreshToken);
  }

  @Get('me')
  @ApiCreatedResponse({ type: AuthEntity })
  async me(@CurrentUser() user: User) {
    return new AuthEntity(await this.userService.getUserByEmail(user.email));
  }
}
