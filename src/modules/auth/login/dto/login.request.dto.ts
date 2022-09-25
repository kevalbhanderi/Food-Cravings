import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class LoginRequestDto {
  @ApiProperty()
  @IsEmail({}, { message: 'LOGIN_EMAIL' })
  @IsNotEmpty({ message: 'LOGIN_EMAIL' })
  @Transform((value) => value.trim())
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'LOGIN_PASSWORD' })
  @IsString({ message: 'LOGIN_PASSWORD' })
  @Transform((value) => value.trim())
  password: string;
}
