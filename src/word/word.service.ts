import { GROUP_NAME_BAG_TRANSLATE } from '../constants';
import { IUser } from './../interfaces/IUser';
import { Injectable } from '@nestjs/common';
import { IWord } from './../interfaces/IWord';
import { UserService } from '../users/user.service';
import { jsonToCsv, parseCsv } from '../util';

@Injectable()
export class WordService {
    constructor(private readonly userService: UserService) {}

    async save(id: string, word: IWord): Promise<any> {
        let user = await this.userService.getUser(id) as IUser;

        let group = user.Groups.find(_ => _.Name === GROUP_NAME_BAG_TRANSLATE);

        if (group===undefined)
            throw Error('Group __BagTranlate not exist');

        let words = (group.Words!=='')?parseCsv(group.Words):[];

        words.push(word);

        group.Words = jsonToCsv(words);

        user.Groups = user.Groups.filter(_ => _.Name !== GROUP_NAME_BAG_TRANSLATE);

        user.Groups.push(group);

        this.userService.save(user);
    }

}
