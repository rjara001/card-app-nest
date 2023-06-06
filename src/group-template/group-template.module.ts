import { Module } from '@nestjs/common';
import { GroupTemplateController } from './group-template.controller';
import { GroupTemplateService } from './group-template.service';
import { UserService } from '../users/user.service.js';

@Module({
  controllers: [GroupTemplateController],
  providers: [GroupTemplateService, UserService]
})
export class GroupTemplateModule {}
