import { Module } from '@nestjs/common';
import { usersProviders } from 'src/providers/user.provider';
import { JwtHelper } from 'src/utils/jwt.helper';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService, JwtHelper, ...usersProviders],
})
export class LoginModule {}
