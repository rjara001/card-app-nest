import { Controller, Get } from '@nestjs/common';
import { IWord } from '../interfaces/IWord.js';
import { GroupTemplateService } from './group-template.service.js';
import { IGroup } from '../interfaces/IGroup.js';

@Controller('GroupTemplate')
export class GroupTemplateController {
    constructor(private readonly GroupTemplateService: GroupTemplateService) {}

  @Get()
  async get(): Promise<IGroup> {

      const template = await this.GroupTemplateService.getTemplate();

      return template;
  }

}
