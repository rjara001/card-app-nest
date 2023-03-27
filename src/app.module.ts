import { UserService } from './users/user.service';
import { UserController } from './users/user.controller';

import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GroupsController } from './groups/groups.controller';
import { GroupsService } from './groups/groups.service';

@Module({
  imports: [],
  controllers: [
    UserController,
    GroupsController],
  providers: [
    UserService, AppService, GroupsService],
})
export class AppModule { }
