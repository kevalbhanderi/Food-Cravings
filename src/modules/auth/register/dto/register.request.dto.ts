import {
  IsLowercase,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class RegisterRequestDto {
  @ApiProperty()
  @MaxLength(50)
  @IsNotEmpty()
  userName: string;

  @ApiProperty()
  @Transform((value) => value.trim())
  @MaxLength(255)
  @IsLowercase()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @Transform((value) => value.trim())
  @IsString()
  @IsNotEmpty()
  password: string;
}
