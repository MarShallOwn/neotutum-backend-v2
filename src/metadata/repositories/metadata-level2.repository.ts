import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { BaseAbstractRepository } from 'src/lib/database/common.repository';
import { MetaDataLevel2 } from '../entities';

// TODO: create interface for this repo

@Injectable()
export class MetaDataLevel2Repository extends BaseAbstractRepository<MetaDataLevel2> {
    constructor(dataSource: DataSource) {
        super(MetaDataLevel2, dataSource);
    }

}