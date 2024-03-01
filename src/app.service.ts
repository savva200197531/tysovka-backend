import { Injectable } from '@nestjs/common';
import YTMusic from "ytmusic-api"

const ytmusic = new YTMusic()

@Injectable()
export class AppService {
  constructor() {

  }

  async getHello() {
    await ytmusic.initialize(/* Optional: Custom cookies */)

    // return ytmusic.searchSongs("Never gonna give you up")
    return ytmusic.getSong('lYBUbBu4W08')
  }
}
