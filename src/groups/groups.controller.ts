import { IWord } from './../interfaces/IWord';
import { IGroup } from './../interfaces/IGroup';
import { Body, Controller, Get, Optional, Param,Post } from '@nestjs/common';
import { GroupsService } from './groups.service.js';

@Controller('groups/:id?')
export class GroupsController {

    constructor(private readonly groupService: GroupsService) {}

    @Get()
    getUser(@Param('id') @Optional() id?:string): IGroup {
        const user = this.groupService.getUser();

        // if (id)
        //     user.Groups =  user.Groups.filter(_=>_.Id === id);
        return null;
        // return user;
    }

    @Post()
    Post(@Body() body: IGroup): void {
        if (body)
            this.groupService.save(body);

    }
}
    