import { getUser, saveUser } from '../schema/store-user';

import { Injectable } from '@nestjs/common';
import { IUser } from '../interfaces/IUser';

@Injectable()
export class UserService {

    async save(user: IUser): Promise<any> {
      
        await saveUser(user);

    }
   
    async getUser(id:string): Promise<IUser> {
       return await getUser(id);
    }
}
