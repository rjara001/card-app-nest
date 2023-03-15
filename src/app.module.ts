import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GroupsController } from './groups/groups.controller';
import { GroupsService } from './groups/groups.service';

@Module({
  imports: [],
  controllers: [GroupsController],
  providers: [AppService, GroupsService],
})
export class AppModule {}
