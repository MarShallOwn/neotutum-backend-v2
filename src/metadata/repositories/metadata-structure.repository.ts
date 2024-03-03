import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { BaseAbstractRepository } from 'src/lib/database/common.repository';
import { MetaDataStructure } from '../entities';

// TODO: create interface for this repo

@Injectable()
export class MetaDataStructureRepository extends BaseAbstractRepository<MetaDataStructure> {
    constructor(dataSource: DataSource) {
        super(MetaDataStructure, dataSource);
    }

    // findMetaDataStructureLevels(): Promise<MetaDataStructure[]> { }
}