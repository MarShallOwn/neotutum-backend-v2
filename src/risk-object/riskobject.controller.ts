import { Controller, Get, Param, Post, Query, Req, Res, Body } from '@nestjs/common';
import { RiskobjectsService } from './riskobject.service';
import { CreateRiskObjectDto } from './dto';

@Controller('riskobjects')
export class RiskobjectsController {
    constructor(private riskObjectService: RiskobjectsService) { }

    @Post()
    getUser(
        @Req() request: Request,
        @Body() createRiskObjectDto: CreateRiskObjectDto,

    ) {
        return this.riskObjectService.createRiskObject(createRiskObjectDto);
    }
}
