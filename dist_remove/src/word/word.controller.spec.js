"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const word_controller_1 = require("./word.controller");
const word_service_1 = require("./word.service");
describe('WordController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [word_controller_1.WordController],
            providers: [word_service_1.WordService],
        }).compile();
        controller = module.get(word_controller_1.WordController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=word.controller.spec.js.map