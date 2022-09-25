import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SuccessResponse } from 'src/interface/response';
import { getSuccessMessages } from 'src/utils/response.message.helper';
import { RegisterRequestDto } from './dto/register.request.dto';
import { RegisterResponseDto } from './dto/register.response.dto';
import { RegisterService } from './register.service';

@Controller('api/v1')
@ApiTags('Register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @ApiOperation({ summary: 'Login into the system' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiBadRequestResponse({ description: 'Invalid email or password' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Post('register')
  @HttpCode(200)
  async userLogin(
    @Body() userRegisterDto: RegisterRequestDto,
  ): Promise<SuccessResponse<RegisterResponseDto>> {
    const data = await this.registerService.register(userRegisterDto);
    return { data, message: getSuccessMessages().USER_REGISTERED };
  }
}
