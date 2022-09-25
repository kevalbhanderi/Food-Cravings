import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UtilsModule } from './utils/utils.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, UtilsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
