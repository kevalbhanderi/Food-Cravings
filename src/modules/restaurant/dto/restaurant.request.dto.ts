import { ApiProperty } from '@nestjs/swagger';
import {
  MaxLength,
  IsEnum,
  IsString,
  IsNotEmpty,
  IsUUID,
} from 'class-validator';
import {
  CHINESE,
  FoodType,
  GUJARATI,
  PUNJABI,
  SOUTHINDIAN,
} from 'src/config/constants';

export class RestaurantRequestDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  restaurantId: string;

  @ApiProperty()
  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  @IsEnum(FoodType)
  foodType: string;

  @ApiProperty()
  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  @IsEnum(CHINESE || PUNJABI || GUJARATI || SOUTHINDIAN)
  foodItem: string[];
}
