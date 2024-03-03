import { Inject, Injectable } from '@nestjs/common';
import { MetaDataLevel1Repository, MetaDataLevel2Repository, MetaDataStructureRepository } from './repositories';
import { FindManyOptions, FindOneOptions, FindOptionsWhere } from 'typeorm';
import { InvalidMetaDataEntityTypeException } from 'src/lib/exceptions/metadata-type.exception';
import { MetaDataTypes } from 'src/lib/enums';
import { MetaDataCreateDtos, MetaDataEntityTypes, MetaDataUpdateDtos } from 'src/lib/types';

@Injectable()
export class MetaDataService {
    constructor(
        @Inject("ExtendedMetaDataStructureRepository")
        private readonly metaDataStructureRepository: MetaDataStructureRepository,
        @Inject("ExtendedMetaDataLevel1Repository")
        private readonly metaDataLevel1Repository: MetaDataLevel1Repository,
        @Inject("ExtendedMetaDataLevel2Repository")
        private readonly metaDataLevel2Repository: MetaDataLevel2Repository,
    ) { }


    create(createDto: MetaDataCreateDtos, type: MetaDataTypes): Promise<MetaDataEntityTypes> {
        switch (type) {
            case MetaDataTypes.MetaDataStructure:
                return this.metaDataStructureRepository.create(createDto).save()
            case MetaDataTypes.MetaDataLevel1:
                return this.metaDataLevel1Repository.create(createDto).save()
            case MetaDataTypes.MetaDataLevel2:
                return this.metaDataLevel2Repository.create(createDto).save()
            default:
                throw new InvalidMetaDataEntityTypeException()
        }
    }

    findAll(type: MetaDataTypes, query: FindOptionsWhere<MetaDataEntityTypes>, options?: FindManyOptions<MetaDataEntityTypes>): Promise<MetaDataEntityTypes[]> {
        switch (type) {
            case MetaDataTypes.MetaDataStructure:
                return this.metaDataStructureRepository.find({ where: query, ...options })
            case MetaDataTypes.MetaDataLevel1:
                return this.metaDataLevel1Repository.find({ where: query, ...options })
            case MetaDataTypes.MetaDataLevel2:
                return this.metaDataLevel2Repository.find({ where: query, ...options })
            default:
                throw new InvalidMetaDataEntityTypeException()
        }
    }

    findOne(type: MetaDataTypes, query: FindOptionsWhere<MetaDataEntityTypes>, options?: FindOneOptions<MetaDataEntityTypes>): Promise<MetaDataEntityTypes> {
        switch (type) {
            case MetaDataTypes.MetaDataStructure:
                return this.metaDataStructureRepository.findOne({ where: query, ...options })
            case MetaDataTypes.MetaDataLevel1:
                return this.metaDataLevel1Repository.findOne({ where: query, ...options })
            case MetaDataTypes.MetaDataLevel2:
                return this.metaDataLevel2Repository.findOne({ where: query, ...options })
            default:
                throw new InvalidMetaDataEntityTypeException()
        }
    }

    update(id: number, updateDto: MetaDataUpdateDtos, type: MetaDataTypes): Promise<MetaDataEntityTypes> {
        switch (type) {
            case MetaDataTypes.MetaDataStructure:
                return this.metaDataStructureRepository.save({ id, ...updateDto })
            case MetaDataTypes.MetaDataLevel1:
                return this.metaDataLevel1Repository.save({ id, ...updateDto })
            case MetaDataTypes.MetaDataLevel2:
                return this.metaDataLevel2Repository.save({ id, ...updateDto })
            default:
                throw new InvalidMetaDataEntityTypeException()
        }
    }

    async remove(id: number, paranoid: boolean = true, type: MetaDataTypes): Promise<any> {
        if (paranoid) {
            await this.metaDataStructureRepository.softDelete(id) //soft delete
            const record = await this.findOne(type, { id }, { withDeleted: true })
            return record
        } else {
            return this.metaDataStructureRepository.delete(id) // hard delete
        }
    }
}


