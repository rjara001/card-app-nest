"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const template_controller_1 = require("./template.controller");
const template_service_1 = require("./template.service");
describe('TemplateController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [template_controller_1.TemplateController],
            providers: [template_service_1.TemplateService],
        }).compile();
        controller = module.get(template_controller_1.TemplateController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=template.controller.spec.js.map