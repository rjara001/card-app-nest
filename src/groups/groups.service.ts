import { IGroup } from './../interfaces/IGroup';

import { Injectable } from '@nestjs/common';



@Injectable()
export class GroupsService {
    async save(group: IGroup): Promise<any> {
        // await saveGroup(group);
    }
   
    getUser(): IGroup {
        return null;
    //    return groups;
    }
};