import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as compression from 'compression';
import { swagger } from './swagger';
import { AllExceptionsFilter } from './dispatchers/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  app.enableCors();
  app.use(compression());

  swagger(app);
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(port);
  Logger.log(`App is listening on port ${port}`);
}
bootstrap();
