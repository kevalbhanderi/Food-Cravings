import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swagger } from './swagger';
import { Logger } from '@nestjs/common';
import { AllExceptionsFilter } from './dispatchers/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const logger = new Logger('bootstrap');

  const port = process.env.PORT || 3000;

  app.setGlobalPrefix('api');

  swagger(app);

  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(port);
  logger.log(`Application start on port ${port} ${process.env.NODE_ENV}`);
}
bootstrap();
