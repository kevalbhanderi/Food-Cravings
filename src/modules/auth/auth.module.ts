import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { RegisterService } from './register/register.service';
import { RegisterController } from './register/register.controller';
import { RegisterModule } from './register/register.module';
import { usersProviders } from 'src/providers/user.provider';
import { UserMapper } from './register/mapper/user.mapper';
import { JwtHelper } from 'src/utils/jwt.helper';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService, ...usersProviders, UserMapper, JwtHelper],
  imports: [LoginModule, RegisterModule],
})
export class AuthModule {}
