import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsArray, IsNotEmpty } from 'class-validator';
import { CHINESE, GUJARATI, PUNJABI, SOUTHINDIAN } from 'src/config/constants';

export class FoodRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @IsEnum(CHINESE || PUNJABI || GUJARATI || SOUTHINDIAN)
  food: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  price: number[];
}
