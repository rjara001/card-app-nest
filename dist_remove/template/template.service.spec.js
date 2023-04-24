"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const template_service_1 = require("./template.service");
describe('TemplateService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [template_service_1.TemplateService],
        }).compile();
        service = module.get(template_service_1.TemplateService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=template.service.spec.js.map