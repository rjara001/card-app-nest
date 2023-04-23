import { Controller, Post, Param, Body} from '@nestjs/common';
import { WordService } from './word.service';
import { IWord } from 'src/interfaces/IWord';

@Controller('word/:id')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Post()
  async Save(@Param('id') id:string, @Body() body: IWord) {
    await this.wordService.save(id, body);
  }
}
