import { getUser, saveUser } from '../schema/store';

import { Injectable } from '@nestjs/common';
import { IUser } from 'src/interfaces/IUser';
import * as groups from '../Resources/groups.json'

@Injectable()
export class UserService {
    async save(user: IUser): Promise<any> {
        await saveUser(user);
    }
   
    async getUser(id:string): Promise<IUser> {
       return await getUser(id);
    }
}
