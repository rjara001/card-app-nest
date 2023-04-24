"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.createNestServer = void 0;
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const app_module_1 = require("./app.module");
const express = require("express");
const functions = require("firebase-functions");
const server = express();
const createNestServer = async (expressInstance) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance));
    app.enableCors();
    console.log('Initial Before Init');
    return app.init();
};
exports.createNestServer = createNestServer;
(0, exports.createNestServer)(server)
    .then(v => console.log('Nest Ready'))
    .catch(err => console.error('Nest broken', err));
console.log('Initial Entry 10');
console.log(process.env.DYNAMO_ACCESS_KEY_ID);
console.log(process.env.DYNAMO_SECRET_ACCESS_KEY);
console.log(process.env.DYNAMO_REGION);
exports.api = functions.https.onRequest(server);
//# sourceMappingURL=index.js.map