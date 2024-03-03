import { Module } from '@nestjs/common';
import { ReferencegroupService } from './referencegroup.service';
import { ReferencegroupController } from './referencegroup.controller';

@Module({
  controllers: [ReferencegroupController],
  providers: [ReferencegroupService],
})
export class ReferencegroupModule {}
