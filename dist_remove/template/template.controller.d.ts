import { TemplateService } from './template.service';
export declare class TemplateController {
    private readonly templateService;
    constructor(templateService: TemplateService);
    getTemplate(id: string): Promise<string>;
}
