import { Test, TestingModule } from '@nestjs/testing';
import { ReferencegroupService } from './referencegroup.service';

describe('ReferencegroupService', () => {
  let service: ReferencegroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReferencegroupService],
    }).compile();

    service = module.get<ReferencegroupService>(ReferencegroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
