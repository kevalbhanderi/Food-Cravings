import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';
import { JwtTokenInterface } from 'src/interface/jwt.token.interface';

@Injectable()
export class JwtHelper {
  generateToken(tokenDto: JwtTokenInterface): string {
    const token = jwt.sign(tokenDto, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRED_TIME,
    });
    return token;
  }

  /**
   * To generate jwt token for admin@socialgames.com admin-user
   * @param tokenDto contains user_id
   */
  generateAdminToken(tokenDto: JwtTokenInterface): string {
    const token = jwt.sign(tokenDto, process.env.JWT_SECRET);
    return token;
  }

  async verify(token: string): Promise<JwtTokenInterface> {
    try {
      const payload = jwt.verify(
        token,
        process.env.JWT_SECRET,
      ) as JwtTokenInterface;
      return { user_id: payload.user_id };
    } catch (e) {
      console.log(e);
    }
  }

  getTokenFromHeader(request: Request): string {
    let token = request.headers['x-access-token'] as string;

    if (token && token.startsWith('Bearer ')) {
      // Remove Bearer from string
      return (token = token.slice(7, token.length));
    }
    return token;
  }
}
