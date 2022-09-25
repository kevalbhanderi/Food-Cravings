import { Module, Global } from '@nestjs/common';
import { databaseProviders } from './database.provider';

@Global()
@Module({
  imports: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
