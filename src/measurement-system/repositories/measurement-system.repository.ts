import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { MeasurementSystem } from '../entities';
import { Injectable } from '@nestjs/common';
import { BaseAbstractRepository, } from 'src/lib/database/common.repository';
import { InjectRepository } from '@nestjs/typeorm';

// export interface MeasurementSystemRepository extends Repository<MeasurementSystem> {
//     this: Repository<MeasurementSystem>;
//     /**
//      * testing 123
//      */
//     findDone(): Promise<MeasurementSystem>;
//     findPending(): Promise<MeasurementSystem>;
// }

// export const ExtendedMeasurementSystemRepository: Pick<
//     MeasurementSystemRepository,
//     'findDone' | 'findPending'
// > = {
//     findDone(this: Repository<MeasurementSystem>) {
//         return this.findOne({})
//     },
//     findPending(this: Repository<MeasurementSystem>) {
//         return this.findOne({})
//     },
// };
// export interface MeasurementSystemRepositoryInterface extends BaseInterfaceRepository<MeasurementSystem> { }

// @Injectable()
// export class MeasurementSystemRepository
//     extends BaseAbstractRepository<MeasurementSystem>
//     implements MeasurementSystemRepositoryInterface {
//     constructor(
//         @InjectRepository(MeasurementSystem)
//         private readonly measurementSystemEntity: Repository<MeasurementSystem>,
//     ) {
//         super(measurementSystemEntity);
//     }
// }

@Injectable()
export class MeasurementSystemRepository extends BaseAbstractRepository<MeasurementSystem> {
    constructor(dataSource: DataSource) {
        super(MeasurementSystem, dataSource);
    }

    async findfdsfds(filterCondition: FindOptionsWhere<MeasurementSystem>): Promise<any> {

        return "qqqq"
    }

}