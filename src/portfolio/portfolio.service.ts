import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Portfolio } from './models';
import { PortfolioRepository } from './portfolio.repository';
import { CreatePortfolioDto, UpdatePortfolioDto } from './dto';

@Injectable()
export class PortfolioService {
    constructor(
        @InjectRepository(Portfolio)
        private readonly portfolioRepository: PortfolioRepository,
    ) { }

    async create(createPortfolioDto: CreatePortfolioDto): Promise<Portfolio> {
        return this.portfolioRepository.create(createPortfolioDto).save()
    }

    async findAll(): Promise<Portfolio[]> {
        return this.portfolioRepository.find({})
    }

    async findAllContextMenu(): Promise<Portfolio[]> {
        // return this.portfolioRepository
        //     .createQueryBuilder('portfolios')
        //     .leftJoinAndSelect('portfolios.servicechains', 'serviceChains')
        //     .leftJoinAndSelect('serviceChains.platforms', 'platforms')
        //     .leftJoinAndSelect('platforms.bpmnFiles', 'bpmnFiles')
        //     .leftJoinAndSelect('serviceChains.riskAssessments', 'riskAssessments')
        //     .getMany();
        return this.portfolioRepository.find({ where: { id: 1 } })
    }

    async updateOne(id: string, updatePortfolioDto: UpdatePortfolioDto): Promise<Portfolio> {
        return this.portfolioRepository.save({
            id: Number(id),
            ...updatePortfolioDto
        });
        // this.portfolioRepository.update(id, updatePortfolioDto)
    }
}


