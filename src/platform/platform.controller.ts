import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { PlatForm } from './models';
import { CreatePlatFormDto } from './dto';
import { UpdateServiceChainDto } from 'src/servicechain/dto';

@Controller('platforms')
export class PlatformController {
    constructor(private readonly platFormService: PlatformService) { }

    @Post()
    create(
        @Body() createPlatFormDto: CreatePlatFormDto,
    ): Promise<PlatForm> {
        return this.platFormService.create(createPlatFormDto);
    }

    @Get()
    findAll(): Promise<PlatForm[]> {
        return this.platFormService.findAll();
    }

    @Get('/nested')
    findAllContextMenu(): Promise<PlatForm[]> {
        return this.platFormService.findAllContextMenu();
    }

    @Put(':id')
    updateOne(
        @Param('id') id: string,
        @Body() updateServiceChainDto: UpdateServiceChainDto,
    ): Promise<PlatForm> {
        return this.platFormService.updateOne(id, updateServiceChainDto);
    }
}
