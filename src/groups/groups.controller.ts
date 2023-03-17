import { IWord } from './../interfaces/IWord';
import { IGroup } from './../interfaces/IGroup';
import { Controller, Get, Optional, Param } from '@nestjs/common';
import { GroupsService } from './groups.service.js';

@Controller('groups/:id?')
export class GroupsController {

    constructor(private readonly groupService: GroupsService) {}

    @Get()
    getList(@Param('id') @Optional() id?:string): IGroup[] {
        if (id)
            return this.groupService.getList().filter(_=>_.Id == id);

        return this.groupService.getList();
    }
}
    