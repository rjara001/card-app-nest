import { IWord } from 'src/interfaces/IWord';
import { UserService } from 'src/users/user.service';
export declare class WordService {
    private readonly userService;
    constructor(userService: UserService);
    save(id: string, word: IWord): Promise<any>;
}
