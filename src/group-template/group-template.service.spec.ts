import { Test, TestingModule } from '@nestjs/testing';
import { GroupTemplateService } from './group-template.service';

describe('GroupTemplateService', () => {
  let service: GroupTemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupTemplateService],
    }).compile();

    service = module.get<GroupTemplateService>(GroupTemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
