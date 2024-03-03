import { Module } from '@nestjs/common';
import { RiskassessmentController } from './riskassessment.controller';
import { RiskassessmentService } from './riskassessment.service';

@Module({
  controllers: [RiskassessmentController],
  providers: [RiskassessmentService]
})
export class RiskassessmentModule {}
