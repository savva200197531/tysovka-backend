import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/refresh')
  async refresh(@Body() body: { refreshToken: string }) {
    const { refreshToken } = body;
    return this.service.refreshAccessToken(refreshToken);
  }

  @Post('/login')
  async login(@Body() body: { code: string }) {
    const { code } = body;
    return this.service.authorizationCodeGrant(code);
  }
}
