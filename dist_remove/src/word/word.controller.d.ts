import { WordService } from './word.service';
import { IWord } from 'src/interfaces/IWord';
export declare class WordController {
    private readonly wordService;
    constructor(wordService: WordService);
    Save(id: string, body: IWord): Promise<void>;
}
