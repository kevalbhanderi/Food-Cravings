import { ApiProperty } from '@nestjs/swagger';
import { Users } from 'src/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly token: string;

  constructor(user: Users, token: string) {
    this.token = token;
    this.email = user.email;
  }
}
