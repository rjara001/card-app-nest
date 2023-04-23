import { IUser } from './../interfaces/IUser';
import { Injectable } from '@nestjs/common';
import { IWord } from 'src/interfaces/IWord';
import { Group } from 'src/model/group';
import { UserService } from 'src/users/user.service';
import { jsonToCsv, parseCsv } from 'src/util';

@Injectable()
export class WordService {
    constructor(private readonly userService: UserService) {}

    async save(id: string, word: IWord): Promise<any> {
        let user = await this.userService.getUser(id) as IUser;

        let group = user.Groups.find(_ => _.Name === '__BagTranslate');

        if (group===undefined)
            throw Error('Group __BagTranlate not exist');

        let words = (group.Words!=='')?parseCsv(group.Words):[];

        words.push(word);

        group.Words = jsonToCsv(words);

        user.Groups = user.Groups.filter(_ => _.Name !== '__BagTranlate');

        user.Groups.push(group);

        this.userService.update(user);
    }

}
