import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlatForm } from './models';
import { PlatFormRepository } from './platform.repository';
import { CreatePlatFormDto, UpdatePlatFormDto } from './dto';

@Injectable()
export class PlatformService {
    constructor(
        @InjectRepository(PlatForm)
        private readonly platFormRepository: PlatFormRepository,
    ) { }

    async create(createPlatFormDto: CreatePlatFormDto): Promise<PlatForm> {
        return this.platFormRepository.create(createPlatFormDto).save()
    }

    async findAll(): Promise<PlatForm[]> {
        return this.platFormRepository.find({})
    }

    async findAllContextMenu(): Promise<PlatForm[]> {
        // return this.portfolioRepository
        //     .createQueryBuilder('portfolios')
        //     .leftJoinAndSelect('portfolios.servicechains', 'serviceChains')
        //     .leftJoinAndSelect('serviceChains.platforms', 'platforms')
        //     .leftJoinAndSelect('platforms.bpmnFiles', 'bpmnFiles')
        //     .leftJoinAndSelect('serviceChains.riskAssessments', 'riskAssessments')
        //     .getMany();
        return this.platFormRepository.find({ where: { id: 1 } })
    }

    async updateOne(id: string, updatePlatFormDto: UpdatePlatFormDto): Promise<PlatForm> {
        return this.platFormRepository.save({
            id: Number(id),
            ...updatePlatFormDto
        });
        // this.portfolioRepository.update(id, updatePortfolioDto)
    }
}
