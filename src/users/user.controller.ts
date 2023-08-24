
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from '../interfaces/IUser';
import { ANONYMOUS } from '../constants.js';

@Controller("user/:id")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getUser(@Param('id') id: string): Promise<IUser> {

        const user = await this.userService.getUser(id);

        if (!user.Groups || user.Groups.length===0)
            user.Groups = (await this.userService.getUser(ANONYMOUS)).Groups;

        return user;
    }

    @Post()
    Post(@Body() body: IUser): void {

        if (body)
            this.userService.save(body);

    }

    @Put()
    Put(@Body() body: IUser): void {

        if (body)
            this.userService.save(body);


    }
}
