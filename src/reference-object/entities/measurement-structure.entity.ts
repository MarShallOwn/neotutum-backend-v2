// import { ENTITY_STATUS } from 'src/lib/constants';
// import { CommonEntity } from 'src/lib/database/common.model';
// import { ServiceChain } from 'src/servicechain/models';


// import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm"
// import { MeasurementSystem } from './measurement-system.entity';

// @Entity("measurement_structure")
// export class MeasurementStructure extends CommonEntity {
//     @Column({ type: 'json' })
//     measurement_json: string;

//     // ===========================================================================
//     // Hooks
//     // ===========================================================================

//     // ===========================================================================
//     // Associations
//     // ===========================================================================
//     @ManyToOne(() => MeasurementSystem, (ms) => ms.measurement_hierarchies)
//     @JoinColumn({ name: 'measurement_system_id' })
//     measurementsystem: MeasurementSystem
// }