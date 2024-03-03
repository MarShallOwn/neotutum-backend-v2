import { Test, TestingModule } from '@nestjs/testing';
import { ReferencegroupController } from './referencegroup.controller';
import { ReferencegroupService } from './referencegroup.service';

describe('ReferencegroupController', () => {
  let controller: ReferencegroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferencegroupController],
      providers: [ReferencegroupService],
    }).compile();

    controller = module.get<ReferencegroupController>(ReferencegroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
