import { Body, Controller, Get, Param, Post , HttpCode } from '@nestjs/common';
import { TranslateService } from './translate.service';
import {ITranslateParameter} from '../interfaces/ITranslateParameter'

@Controller('translate')
export class TranslateController {
  constructor(private readonly translateService: TranslateService) {

    
  }

  @Post()
  @HttpCode(200)
    async Post(@Body() body: ITranslateParameter): Promise<any>  {
        
        const template = await this.translateService.getTranslate(body.IdUser, body.Text, body.codeLanguage);
            
        return {
          userid: body.IdUser
          , significado: template
        };
    }

}
