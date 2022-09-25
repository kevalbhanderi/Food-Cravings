import { FoodItem } from 'src/entities/food.entity';

/**
 * Food Item provider
 */
export const foodItemProviders = [
  {
    provide: 'FOODITEM_REPOSITORY',
    useValue: FoodItem,
  },
];
