import { Injectable, Inject, NotFoundException, Scope } from '@nestjs/common';
import { CreateRiskObjectDto } from './dto';
import { RiskObject } from './models/riskobject.entity';
import { InjectRepository, InjectDataSource, } from '@nestjs/typeorm';
import { RiskObjectRepository } from './riskobject.repository';
import { PhysicalRiskObject } from './models/riskobject-physical.entity';
import { Repository } from 'typeorm';

// riskassessment
// platforms
// bpmn
// positions

@Injectable()
export class RiskobjectsService {
    constructor(
        @InjectRepository(RiskObject)
        private readonly riskObjectRepository: RiskObjectRepository,
        @InjectRepository(PhysicalRiskObject)
        private readonly physicalRiskObjectRepository: Repository<PhysicalRiskObject>,
    ) { }

    async createRiskObject(createRiskObjectDto: CreateRiskObjectDto) {
        const newObj = this.riskObjectRepository.create({ name: createRiskObjectDto.name })
        await newObj.save()

        // create riskobject
        // create position

        // if physical call _createPhysicalRiskObject 


        return "Done"
    }

    async _createPhysicalRiskObject(riskobject) {
        // get all riskviews in serviecchain by bpmnFileId
        const newPhysical = this.physicalRiskObjectRepository.create({ bpmnDataObjectId: 'gfdgdf', fileId: 5 })
        newPhysical.riskObject = riskobject
        await newPhysical.save()
    }

}
