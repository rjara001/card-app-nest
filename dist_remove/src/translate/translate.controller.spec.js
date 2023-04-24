"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const translate_controller_1 = require("./translate.controller");
const translate_service_1 = require("./translate.service");
describe('TranslateController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [translate_controller_1.TranslateController],
            providers: [translate_service_1.TranslateService],
        }).compile();
        controller = module.get(translate_controller_1.TranslateController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=translate.controller.spec.js.map