"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const translate_service_1 = require("./translate.service");
describe('TranslateService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [translate_service_1.TranslateService],
        }).compile();
        service = module.get(translate_service_1.TranslateService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=translate.service.spec.js.map