import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dynamoose from 'dynamoose';
import { config } from 'aws-sdk/global';
import DynamoDB = require('aws-sdk/clients/dynamodb');

const dotenv = require('dotenv');
dotenv.config();

async function bootstrap() {

  config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
