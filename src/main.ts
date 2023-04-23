import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import DynamoDB = require('aws-sdk/clients/dynamodb');

const dotenv = require('dotenv');
dotenv.config();

async function bootstrap() {

  console.log('Initial Entry')
  console.log(process.env.DYNAMO_ACCESS_KEY_ID)
  console.log(process.env.DYNAMO_SECRET_ACCESS_KEY)
  console.log(process.env.DYNAMO_REGION)

  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(process.env.PORT) || 3000);
}

bootstrap();