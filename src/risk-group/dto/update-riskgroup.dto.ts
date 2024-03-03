import { PartialType } from '@nestjs/mapped-types';
import { CreateRiskgroupDto } from './create-riskgroup.dto';

export class UpdateRiskgroupDto extends PartialType(CreateRiskgroupDto) {}
