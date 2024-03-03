import { Test, TestingModule } from '@nestjs/testing';
import { RiskgroupController } from './riskgroup.controller';
import { RiskgroupService } from './riskgroup.service';

describe('RiskgroupController', () => {
  let controller: RiskgroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiskgroupController],
      providers: [RiskgroupService],
    }).compile();

    controller = module.get<RiskgroupController>(RiskgroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
