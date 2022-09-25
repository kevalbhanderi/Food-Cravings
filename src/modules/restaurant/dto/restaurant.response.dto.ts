import { ApiProperty } from '@nestjs/swagger';
import { RestaurantDoc } from '../interface/restaurant.interface';

export class RestaurantResponseDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly restaurantName: string;

  @ApiProperty()
  readonly foodType: string;

  constructor(restaurant: RestaurantDoc) {
    this.id = restaurant.id;
    this.restaurantName = restaurant.restaurantname;
    this.foodType = restaurant.foodtype;
  }
}
