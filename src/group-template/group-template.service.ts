import { Injectable } from '@nestjs/common';
import { IWord } from '../interfaces/IWord.js';
import { UserService } from '../users/user.service.js';
import { parseCsv } from '../util.js';
import { IGroup } from '../interfaces/IGroup.js';
import { Group } from '../model/group.js';
import { ANONYMOUS } from '../constants.js';

@Injectable()
export class GroupTemplateService {

    constructor(protected userService: UserService){

    }
    
    async getTemplate(): Promise<IGroup> {
        const _user =  await this.userService.getUser(ANONYMOUS);
        if (_user)
        {
            return _user.Groups[0];
        }

        return new Group();
    }

}
