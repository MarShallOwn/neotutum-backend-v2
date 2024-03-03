import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ServiceChain } from './models';
import { CreateServiceChainDto, UpdateServiceChainDto } from './dto';
import { ServicechainService } from './servicechain.service';

@Controller('servicechains')
export class ServicechainController {
    constructor(private readonly serviceChainService: ServicechainService) { }

    @Post()
    create(
        @Body() createServiceChainDto: CreateServiceChainDto,
    ): Promise<ServiceChain> {
        return this.serviceChainService.create(createServiceChainDto);
    }

    @Get()
    findAll(): Promise<ServiceChain[]> {
        return this.serviceChainService.findAll();
    }

    @Get('/nested')
    findAllContextMenu(): Promise<ServiceChain[]> {
        return this.serviceChainService.findAllContextMenu();
    }

    @Put(':id')
    updateOne(
        @Param('id') id: string,
        @Body() updateServiceChainDto: UpdateServiceChainDto,
    ): Promise<ServiceChain> {
        return this.serviceChainService.updateOne(id, updateServiceChainDto);
    }

}
