// import { NestFactory } from '@nestjs/core';
// import { ExpressAdapter } from '@nestjs/platform-express';
// import { AppModule } from './app.module';
// import * as express from 'express';
// import * as functions from 'firebase-functions';

// const server = express();

// export const createNestServer = async (expressInstance) => {

//   const app = await NestFactory.create(
//     AppModule,
//     new ExpressAdapter(expressInstance),
//   );

//   app.enableCors();

//   console.log('Initial Before Init')
//   const dotenv = require('dotenv');
//   dotenv.config();
  
//   return app.init();
// };

// createNestServer(server)
//     .then(v => console.log('Nest Ready'))
//     .catch(err => console.error('Nest broken', err));

//     console.log('Initial Entry 10')
//     console.log(process.env.DYNAMO_ACCESS_KEY_ID)
//     console.log(process.env.DYNAMO_SECRET_ACCESS_KEY)
//     console.log(process.env.DYNAMO_REGION)
  
// export const api = functions.https.onRequest(server);
