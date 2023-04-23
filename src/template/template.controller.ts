import { Controller, Param, Get } from '@nestjs/common';
import { TemplateService } from './template.service';

@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {
    
  }

  @Get()
  async getTemplate(@Param('id') id:string): Promise<string> {
      
      const template = await this.templateService.getTemplate(id);
      
      return template;
  }
}
