import { ApiProperty } from '@nestjs/swagger';

export class RegisterResponseDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly userName: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly token: string;

  constructor(user: any, token: string) {
    this.id = user.id;
    this.userName = user.username;
    this.email = user.email;
    this.token = token;
  }
}
