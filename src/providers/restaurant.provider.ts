import { Restaurant } from "src/entities/restaurant.entity";

/**
 * Restaurant provider
 */
export const restaurantProviders = [
  {
    provide: 'RESTAURANT_REPOSITORY',
    useValue: Restaurant,
  },
];
