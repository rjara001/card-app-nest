import { IWord } from './../interfaces/IWord';
import { IGroup } from './../interfaces/IGroup';
import { Controller, Get, Param } from '@nestjs/common';
import { GroupsService } from './groups.service.js';

@Controller('groups/:id')
export class GroupsController {

    constructor(private readonly groupService: GroupsService) {}
    @Get()
    getListTemplate(@Param('id') id:string): IGroup {
       return this.groupService.getListTemplate(id);
    }
}
    