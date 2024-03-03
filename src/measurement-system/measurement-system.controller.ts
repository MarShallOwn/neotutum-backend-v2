import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MeasurementSystemService } from './measurement-system.service';
import { MeasurementSystem } from './entities';

@Controller('measurement-system')
export class MeasurementSystemController {
    constructor(private readonly measurementSystemService: MeasurementSystemService) { }

    // @Post()
    // create(
    //     @Body() createPortfolioDto: CreatePortfolioDto,
    // ): Promise<Portfolio> {
    //     return this.portfolioService.create(createPortfolioDto);
    // }

    @Get()
    findAll(): any {
        return this.measurementSystemService.findAll();
    }

    // @Get('/nested')
    // findAllContextMenu(): Promise<Portfolio[]> {
    //     return this.portfolioService.findAllContextMenu();
    // }

    // @Put(':id')
    // updateOne(
    //     @Param('id') id: string,
    //     @Body() updatePortfolioDto: UpdatePortfolioDto,
    // ): Promise<Portfolio> {
    //     return this.portfolioService.updateOne(id, updatePortfolioDto);
    // }

}
