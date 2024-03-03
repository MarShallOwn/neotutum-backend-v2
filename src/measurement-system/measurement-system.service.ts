import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { } from './dto';
import { MeasurementSystem } from './entities';
import { MeasurementSystemRepository, } from './repositories/measurement-system.repository';

@Injectable()
export class MeasurementSystemService {
    constructor(
        // @InjectRepository(MeasurementSystem)
        // private readonly measurementSystemRepository: MeasurementSystemRepository,
        @Inject("ExtendedMeasurementSystemRepository")
        private readonly measurementSystemRepository: MeasurementSystemRepository,
    ) { }


    async findAll(): Promise<any> {
        this.measurementSystemRepository.findfdsfds
        return this.measurementSystemRepository.findOneRiskNetwork({ id: 1 })
    }


}


