import { Module } from '@nestjs/common';
import { RiskgroupService } from './riskgroup.service';
import { RiskgroupController } from './riskgroup.controller';

@Module({
  controllers: [RiskgroupController],
  providers: [RiskgroupService],
})
export class RiskgroupModule {}
