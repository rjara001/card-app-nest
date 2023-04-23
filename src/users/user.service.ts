import { getUser, saveUser, updateUser } from '../schema/store-user';

import { Injectable } from '@nestjs/common';
import { IUser } from 'src/interfaces/IUser';

@Injectable()
export class UserService {

    async update(user: IUser): Promise<any> {
        console.log('put2');
        await updateUser(user);
        console.log('updated ok');
    }

    async save(user: IUser): Promise<any> {
        console.log('post2');
        await saveUser(user);
        console.log('created ok');
    }
   
    async getUser(id:string): Promise<IUser> {
       return await getUser(id);
    }
}
