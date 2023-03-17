import { IGroup } from './../interfaces/IGroup';
import { IWord } from './../interfaces/IWord';
import { Injectable } from '@nestjs/common';
import * as groups from '../Resources/groups.json'

@Injectable()
export class GroupsService {
   
    getList(): IGroup[] {
       return groups.groups;
    }
};