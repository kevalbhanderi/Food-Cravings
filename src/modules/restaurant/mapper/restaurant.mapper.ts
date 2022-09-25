import * as uuid from 'uuid';
import { RestaurantRequestDto } from '../dto/restaurant.request.dto';

export class RestaurantMapper {
  /**
   * map restaurant info
   * @param restaurant
   * @returns
   */
  buildRestaurant = async (restaurant: RestaurantRequestDto) => {
    return {
      id: uuid.v4(),
      restaurantname: restaurant.restaurantName,
      foodtype: restaurant.foodType,
    };
  };
}
