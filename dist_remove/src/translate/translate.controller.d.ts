import { TranslateService } from './translate.service';
import { ITranslateParameter } from '../interfaces/ITranslateParameter';
export declare class TranslateController {
    private readonly translateService;
    constructor(translateService: TranslateService);
    Post(body: ITranslateParameter): Promise<any>;
}
