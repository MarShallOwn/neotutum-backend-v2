import { Test, TestingModule } from '@nestjs/testing';
import { RiskgroupService } from './riskgroup.service';

describe('RiskgroupService', () => {
  let service: RiskgroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiskgroupService],
    }).compile();

    service = module.get<RiskgroupService>(RiskgroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
