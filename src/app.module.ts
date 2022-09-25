import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UtilsModule } from './utils/utils.module';
import { DatabaseModule } from './database/database.module';
import { RestaurantModule } from './modules/restaurant/restaurant.module';

@Module({
  imports: [AuthModule, UtilsModule, DatabaseModule, RestaurantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
