import { Injectable } from '@nestjs/common';
import { CreateRiskgroupDto } from './dto/create-riskgroup.dto';
import { UpdateRiskgroupDto } from './dto/update-riskgroup.dto';

@Injectable()
export class RiskgroupService {
  create(createRiskgroupDto: CreateRiskgroupDto) {
    return 'This action adds a new riskgroup';
  }

  findAll() {
    return `This action returns all riskgroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} riskgroup`;
  }

  update(id: number, updateRiskgroupDto: UpdateRiskgroupDto) {
    return `This action updates a #${id} riskgroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} riskgroup`;
  }
}
