import { IUser } from 'src/interfaces/IUser';
export declare class UserService {
    update(user: IUser): Promise<any>;
    save(user: IUser): Promise<any>;
    getUser(id: string): Promise<IUser>;
}
