
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from '../interfaces/IUser';

@Controller("user/:id")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getUser(@Param('id') id:string): Promise<IUser> {
        const user = await this.userService.getUser(id);

        return user;
    }

    @Post()
    Post(@Body() body: IUser): void {
        if (body)
            this.userService.save(body);

    }
    
}
