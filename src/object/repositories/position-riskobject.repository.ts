// import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
// import { RiskObject } from './models/riskobject.model';
// // import { AbstractRepository } from 'src/common/database/common.repository';
// import { CreatePhsyicalRiskObjectDto } from './dto/create-riskobject-physical.dto';
// import { Repository } from 'typeorm';


// export interface RiskObjectRepository extends Repository<RiskObject> {
//     this: Repository<RiskObject>;
//     /**
//      * testing 123
//      */
//     findDone(): Promise<RiskObject>;
//     findPending(): Promise<RiskObject>;

// }

// export const ExtendedRiskObjectRepository: Pick<
//     RiskObjectRepository,
//     'findDone' | 'findPending'
// > = {
//     findDone(this: Repository<RiskObject>) {
//         return this.findOne({})
//     },
//     findPending(this: Repository<RiskObject>) {
//         return this.findOne({})
//     },
// };
