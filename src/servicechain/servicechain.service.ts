import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceChain } from './models';
import { ServiceChainRepository } from './servicechain.repository';
import { CreateServiceChainDto, UpdateServiceChainDto } from './dto';

@Injectable()
export class ServicechainService {
    constructor(
        @InjectRepository(ServiceChain)
        private readonly serviceChainRepository: ServiceChainRepository,
    ) { }

    async create(createServiceChainDto: CreateServiceChainDto): Promise<ServiceChain> {
        return this.serviceChainRepository.create(createServiceChainDto).save()
    }

    async findAll(): Promise<ServiceChain[]> {
        return this.serviceChainRepository.find({})
    }

    async findAllContextMenu(): Promise<ServiceChain[]> {
        // return this.portfolioRepository
        //     .createQueryBuilder('portfolios')
        //     .leftJoinAndSelect('portfolios.servicechains', 'serviceChains')
        //     .leftJoinAndSelect('serviceChains.platforms', 'platforms')
        //     .leftJoinAndSelect('platforms.bpmnFiles', 'bpmnFiles')
        //     .leftJoinAndSelect('serviceChains.riskAssessments', 'riskAssessments')
        //     .getMany();
        return this.serviceChainRepository.find({ where: { id: 1 } })
    }

    async updateOne(id: string, updateServiceChainDto: UpdateServiceChainDto): Promise<ServiceChain> {
        return this.serviceChainRepository.save({
            id: Number(id),
            ...updateServiceChainDto
        });
        // this.portfolioRepository.update(id, updatePortfolioDto)
    }
}