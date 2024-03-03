import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { BaseAbstractRepository } from 'src/lib/database/common.repository';
import { MetaDataLevel1 } from '../entities';
import { GetMetaDataLevel1Dto } from '../dtos';

interface IMetaDataLevel1Repository extends Repository<MetaDataLevel1> {
    /**
     * fetches all metadata level 1 and level 2 nested
     */
    findMetaDataLevels(filterDto: GetMetaDataLevel1Dto): Promise<MetaDataLevel1[]>;
}

@Injectable()
export class MetaDataLevel1Repository extends BaseAbstractRepository<MetaDataLevel1> implements IMetaDataLevel1Repository {
    constructor(dataSource: DataSource) {
        super(MetaDataLevel1, dataSource);
    }

    async findMetaDataLevels({ deleted, name }: GetMetaDataLevel1Dto): Promise<MetaDataLevel1[]> {
        const query = this
            .createQueryBuilder('metadatalevel1')
            .leftJoinAndSelect('metadatalevel1.metadatalevel2s', 'metadatalevel2')

        if (deleted) query.withDeleted()

        if (name) query.where(`metadatalevel1.name = :name`, { name });

        return await query.getMany()

    }

}