import { Module } from '@nestjs/common';
import { PositionsController } from './object.controller';
import { PositionsService } from './object.service';

@Module({
  controllers: [PositionsController],
  providers: [PositionsService]
})
export class PositionsModule { }
