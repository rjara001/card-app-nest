// lambda.ts
import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { config } from 'aws-sdk/global';

const express = require('express');

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this
// is likely due to a compressed response (e.g. gzip) which has not
// been handled correctly by aws-serverless-express and/or API
// Gateway. Add the necessary MIME types to binaryMimeTypes below
const binaryMimeTypes: string[] = [];

let cachedServer: Server;
let whitelist:string[] = ['localhost']
// Create the Nest.js server and convert it into an Express.js server
async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
     const expressApp = express();
     const nestApp = await NestFactory.create(AppModule, new
ExpressAdapter(expressApp))
     nestApp.use(eventContext());
     nestApp.enableCors({
      origin: function (origin, callback) {
        // if (!origin || whitelist.indexOf(origin) !== -1) {
        //   callback(null, true)
        // } else {
        //   callback(new Error('Not allowed by CORS'))
        // }
          callback(null, true);
      },
    });
     await nestApp.init();
     cachedServer = createServer(expressApp, undefined,
binaryMimeTypes);
  }
  return cachedServer;
}

global.atob = require("atob");

global.Blob = require('node-blob');

// Export the handler : the entry point of the Lambda function
export const handler: Handler = async (event: any, context: Context) => {
  console.log('Initial Entry 3')

  config.update({
    accessKeyId: process.env.DYNAMO_ACCESS_KEY_ID,
    secretAccessKey: process.env.DYNAMO_SECRET_ACCESS_KEY,
    region: process.env.DYNAMO_REGION
  });
  
  cachedServer = await bootstrapServer();
  return proxy(cachedServer, event, context, 'PROMISE').promise;
}