"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_serverless_express_1 = require("aws-serverless-express");
const middleware_1 = require("aws-serverless-express/middleware");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const app_module_1 = require("./app.module");
const global_1 = require("aws-sdk/global");
const express = require('express');
const binaryMimeTypes = [];
let cachedServer;
let whitelist = ['localhost'];
async function bootstrapServer() {
    if (!cachedServer) {
        const expressApp = express();
        const nestApp = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
        nestApp.use((0, middleware_1.eventContext)());
        nestApp.enableCors({
            origin: function (origin, callback) {
                callback(null, true);
            },
        });
        await nestApp.init();
        cachedServer = (0, aws_serverless_express_1.createServer)(expressApp, undefined, binaryMimeTypes);
    }
    return cachedServer;
}
global.atob = require("atob");
global.Blob = require('node-blob');
const handler = async (event, context) => {
    console.log('Initial Entry 3');
    global_1.config.update({
        accessKeyId: process.env.DYNAMO_ACCESS_KEY_ID,
        secretAccessKey: process.env.DYNAMO_SECRET_ACCESS_KEY,
        region: process.env.DYNAMO_REGION
    });
    cachedServer = await bootstrapServer();
    return (0, aws_serverless_express_1.proxy)(cachedServer, event, context, 'PROMISE').promise;
};
exports.handler = handler;
//# sourceMappingURL=lambda.js.map