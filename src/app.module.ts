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
import { GroupTemplateModule } from './group-template/group-template.module';
import { GroupTemplateService } from './group-template/group-template.service.js';
import { GroupTemplateController } from './group-template/group-template.controller.js';

@Module({
  imports: [ConfigModule.forRoot(), TemplateModule, TranslateModule, WordModule, GroupTemplateModule],
  controllers: [
    UserController,
    WordController,
    TemplateController,
    GroupTemplateController
    // GroupsController
  ],
  providers: [
    UserService
    , WordService
    , TemplateService
    , GroupTemplateService
    // , GroupsService
  ],
})
export class AppModule { }
