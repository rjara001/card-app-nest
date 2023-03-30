import { getUser, saveUser, updateUser } from '../schema/store';

import { Injectable } from '@nestjs/common';
import { IUser } from 'src/interfaces/IUser';
import * as groups from '../Resources/groups.json'

@Injectable()
export class UserService {
    async update(user: IUser): Promise<any> {
        await updateUser(user);
        console.log('updated ok');
    }

    async save(user: IUser): Promise<any> {
        await saveUser(user);
        console.log('created ok');
    }
   
    async getUser(id:string): Promise<IUser> {
       return await getUser(id);
    }
}
