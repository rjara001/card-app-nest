import { Module } from '@nestjs/common';
import { UserService } from './User.service';
import { UserController } from './User.controller';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
