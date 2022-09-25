import { Controller, Post, Body, HttpCode, UseGuards } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AdminGuard } from 'src/guard/admin.guard';
import { RestaurantRequestDto } from './dto/restaurant.request.dto';
import { RestaurantService } from './restaurant.service';

@Controller('api/v1/restaurant')
@ApiTags('Restaurant')
@UseGuards(AdminGuard)
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @ApiOperation({ summary: 'Create a Restaurant' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Post()
  @HttpCode(200)
  async createRestaurant(@Body() restaurantRequestDto: RestaurantRequestDto) {
    const data = await this.restaurantService.createRestaurant(
      restaurantRequestDto,
    );
    return { data };
  }
}
