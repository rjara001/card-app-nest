import { Module } from '@nestjs/common';
import { WordService } from './word.service';
import { WordController } from './word.controller';
import { UserService } from '../users/user.service'; // 'src/users/user.service';

@Module({
  controllers: [WordController],
  providers: [WordService, UserService]
})
export class WordModule {}
