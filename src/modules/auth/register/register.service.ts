import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { whiteListedEmail } from 'src/config/constants';
import { Users } from 'src/entities/user.entity';
import { JwtHelper } from 'src/utils/jwt.helper';
import { getErrorMessages } from 'src/utils/response.message.helper';
import { RegisterRequestDto } from './dto/register.request.dto';
import { RegisterResponseDto } from './dto/register.response.dto';
import { UserMapper } from './mapper/user.mapper';

@Injectable()
export class RegisterService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly USER_REPOSITORY: typeof Users,
    private readonly userMapper: UserMapper,
    private readonly jwtHelper: JwtHelper,
  ) {}

  /**
   * used for user registration processs
   * @param registerDto
   * @returns
   */
  async register(
    registerDto: RegisterRequestDto,
  ): Promise<RegisterResponseDto> {
    const user = await this.USER_REPOSITORY.findOne({
      // attributes: ['id', 'username', 'email', 'passwordhash'],
      where: {
        email: registerDto.email,
      },
    });
    if (user) {
      throw new BadRequestException(getErrorMessages().USER_EXISTS);
    }
    const isAdmin = whiteListedEmail.includes(registerDto.email) ? true : false;

    try {
      const newUser = await this.userMapper.buildUser(registerDto, isAdmin);
      const tokenDto = { user_id: registerDto.email };
      const token = this.jwtHelper.generateToken(tokenDto);
      await this.USER_REPOSITORY.create(newUser);
      return new RegisterResponseDto(newUser, token);
    } catch (e) {
      console.log(e);
    }
  }
}
