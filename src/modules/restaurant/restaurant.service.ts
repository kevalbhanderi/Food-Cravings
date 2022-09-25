import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { FoodItem } from 'src/entities/food.entity';
import { Restaurant } from 'src/entities/restaurant.entity';
import { getErrorMessages } from 'src/utils/response.message.helper';
import { RestaurantRequestDto } from './dto/restaurant.request.dto';
import { RestaurantResponseDto } from './dto/restaurant.response.dto';
import { RestaurantDoc } from './interface/restaurant.interface';
import { RestaurantMapper } from './mapper/restaurant.mapper';

@Injectable()
export class RestaurantService {
  constructor(
    @Inject('RESTAURANT_REPOSITORY')
    private readonly RESTAURANT_REPOSITORY: typeof Restaurant,
    @Inject('FOODITEM_REPOSITORY')
    private readonly FOODITEM_REPOSITORY: typeof FoodItem,
    private readonly restaurantMapper: RestaurantMapper,
  ) {}

  /**
   * To create restaurant
   * @param restaurantRequestDto
   * @returns
   */
  async createRestaurant(restaurantRequestDto: RestaurantRequestDto) {
    const restaurant = (await this.restaurantMapper.buildRestaurant(
      restaurantRequestDto,
    )) as RestaurantDoc;

    await this.RESTAURANT_REPOSITORY.create(restaurant);
    return new RestaurantResponseDto(restaurant);
  }

  /**
   * Add Food for restaurants
   * @param restaurantId
   * @param items
   */
  async addFoodItem(restaurantId: string, items: string[]) {
    const restaurant = await this.RESTAURANT_REPOSITORY.findOne({
      where: {
        id: restaurantId,
      },
    });
    if (!restaurant) {
      throw new BadRequestException(getErrorMessages().RESTAURANT_NOT_EXISTS);
    }
  }
}
