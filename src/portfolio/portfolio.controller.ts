import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { Portfolio } from './models';
import { CreatePortfolioDto, UpdatePortfolioDto } from './dto';

@Controller('portfolios')
export class PortfolioController {
    constructor(private readonly portfolioService: PortfolioService) { }

    @Post()
    create(
        @Body() createPortfolioDto: CreatePortfolioDto,
    ): Promise<Portfolio> {
        return this.portfolioService.create(createPortfolioDto);
    }

    @Get()
    findAll(): Promise<Portfolio[]> {
        return this.portfolioService.findAll();
    }

    @Get('/nested')
    findAllContextMenu(): Promise<Portfolio[]> {
        return this.portfolioService.findAllContextMenu();
    }

    @Put(':id')
    updateOne(
        @Param('id') id: string,
        @Body() updatePortfolioDto: UpdatePortfolioDto,
    ): Promise<Portfolio> {
        return this.portfolioService.updateOne(id, updatePortfolioDto);
    }

}
