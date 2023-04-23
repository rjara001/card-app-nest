import { UserService } from './users/user.service';
import { UserController } from './users/user.controller';

import { Module } from '@nestjs/common';

// import { GroupsController } from './groups/groups.controller';
// import { GroupsService } from './groups/groups.service';
import { ConfigModule } from '@nestjs/config';
import { TemplateModule } from './template/template.module';
import { TranslateModule } from './translate/translate.module';
import { WordModule } from './word/word.module';
import { WordService } from './word/word.service';
import { WordController } from './word/word.controller';
import { TemplateController } from './template/template.controller';
import { UserModule } from './users/user.module';
import { TemplateService } from './template/template.service';

@Module({
  imports: [ConfigModule.forRoot(), TemplateModule, TranslateModule, WordModule],
  controllers: [
    UserController,
    WordController,
    TemplateController
    // GroupsController
  ],
  providers: [
    UserService
    , WordService
    , TemplateService
    // , GroupsService
  ],
})
export class AppModule { }
