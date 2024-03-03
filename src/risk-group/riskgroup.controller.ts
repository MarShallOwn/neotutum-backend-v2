import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RiskgroupService } from './riskgroup.service';
import { CreateRiskgroupDto } from './dto/create-riskgroup.dto';
import { UpdateRiskgroupDto } from './dto/update-riskgroup.dto';

@Controller('riskgroup')
export class RiskgroupController {
  constructor(private readonly riskgroupService: RiskgroupService) {}

  @Post()
  create(@Body() createRiskgroupDto: CreateRiskgroupDto) {
    return this.riskgroupService.create(createRiskgroupDto);
  }

  @Get()
  findAll() {
    return this.riskgroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.riskgroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRiskgroupDto: UpdateRiskgroupDto) {
    return this.riskgroupService.update(+id, updateRiskgroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.riskgroupService.remove(+id);
  }
}
