import { UserService } from './user.service';
import { IUser } from '../interfaces/IUser';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(id: string): Promise<IUser>;
    Post(body: IUser): void;
    Put(body: IUser): void;
}
