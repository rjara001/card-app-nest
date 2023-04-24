"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const user_service_1 = require("./users/user.service");
const user_controller_1 = require("./users/user.controller");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const template_module_1 = require("./template/template.module");
const translate_module_1 = require("./translate/translate.module");
const word_module_1 = require("./word/word.module");
const word_service_1 = require("./word/word.service");
const word_controller_1 = require("./word/word.controller");
const template_controller_1 = require("./template/template.controller");
const template_service_1 = require("./template/template.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(), template_module_1.TemplateModule, translate_module_1.TranslateModule, word_module_1.WordModule],
        controllers: [
            user_controller_1.UserController,
            word_controller_1.WordController,
            template_controller_1.TemplateController
        ],
        providers: [
            user_service_1.UserService,
            word_service_1.WordService,
            template_service_1.TemplateService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map