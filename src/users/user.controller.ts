
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from '../interfaces/IUser';

@Controller("user/:id")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getUser(@Param('id') id:string): Promise<IUser> {
        console.log('get user');
        const user = await this.userService.getUser(id);
        console.log('got user:' + JSON.stringify(user));
        return user;
    }

    @Post()
    Post(@Body() body: IUser): void {
        console.log('post user');
        console.log(JSON.stringify(body));


            try {
                if (body)
                    this.userService.save(body);
                console.log('put1');
            } catch (error) {
                console.log(error);
            }
    }
    
    @Put()
    Put(@Body() body: IUser): void {
        console.log('put user');
        console.log(JSON.stringify(body));
        
        try {
            if (body)
                this.userService.update(body);
            console.log('put1');
        } catch (error) {
            console.log(error);
        }


    }
}
