import { Injectable } from '@nestjs/common';
const SpotifyWebApi = require('spotify-web-api-node');

@Injectable()
export class AuthService {
  private readonly spotifyApi: any;

  constructor() {
    this.spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      const data = await this.spotifyApi.refreshAccessToken();
      return {
        access_token: data.body.access_token,
        expires_in: data.body.expires_in,
      };
    } catch (error) {
      throw new Error('Failed to refresh access token');
    }
  }

  async authorizationCodeGrant(code: string) {
    try {
      const data = await this.spotifyApi.authorizationCodeGrant(code);
      return {
        access_token: data.body.access_token,
        refresh_token: data.body.refresh_token,
        expires_in: data.body.expires_in,
      };
    } catch (error) {
      throw new Error('Failed to login');
    }
  }
}
