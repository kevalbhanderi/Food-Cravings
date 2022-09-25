import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { whiteListedEmail } from 'src/config/constants';
import { JwtHelper } from '../utils/jwt.helper';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly jwtHelper: JwtHelper) {}

  async canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();
    const token = this.jwtHelper.getTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException({
        isError: true,
        message: 'Login required',
      });
    }

    const user = await this.jwtHelper.verify(token);
    if (!whiteListedEmail.includes(user.user_id)) {
      throw new UnauthorizedException({
        isError: true,
        message: 'Admin access only',
      });
    }
    user['ip_Address'] = request.headers['x-forwarded-for'] as string;
    if (user) {
      request.user = user;
      return request;
    }

    throw new UnauthorizedException({
      isError: true,
      message: 'Login required',
    });
  }
}
