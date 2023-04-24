"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require('dotenv');
dotenv.config();
async function bootstrap() {
    console.log('Initial Entry');
    console.log(process.env.DYNAMO_ACCESS_KEY_ID);
    console.log(process.env.DYNAMO_SECRET_ACCESS_KEY);
    console.log(process.env.DYNAMO_REGION);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map