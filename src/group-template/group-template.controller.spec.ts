import { Test, TestingModule } from '@nestjs/testing';
import { GroupTemplateController } from './group-template.controller';

describe('GroupTemplateController', () => {
  let controller: GroupTemplateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupTemplateController],
    }).compile();

    controller = module.get<GroupTemplateController>(GroupTemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
