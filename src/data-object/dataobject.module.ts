import { Module } from '@nestjs/common';
import { DataobjectController } from './dataobject.controller';
import { DataobjectService } from './dataobject.service';

@Module({
  controllers: [DataobjectController],
  providers: [DataobjectService]
})
export class DataobjectModule {}
