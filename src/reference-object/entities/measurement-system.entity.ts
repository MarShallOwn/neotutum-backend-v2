// import { ENTITY_STATUS } from 'src/lib/constants';
// import { CommonEntity } from 'src/lib/database/common.model';
// import { ServiceChain } from 'src/servicechain/models';


// import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm"
// import { MeasurementStructure, } from './measurement-structure.entity';
// import { MetaDataStructure } from 'src/bpmn/entities';

// @Entity("measurement-system")
// export class MeasurementSystem extends CommonEntity {
//     @Column({ length: 100 })
//     name: string;

//     @Column({ type: 'enum', enum: ENTITY_STATUS, default: ENTITY_STATUS.DRAFTED })
//     status: string;

//     // ===========================================================================
//     // Hooks
//     // ===========================================================================

//     // ===========================================================================
//     // Associations
//     // ===========================================================================
//     @OneToMany(() => MeasurementStructure, (mh) => mh.measurementsystem)
//     measurement_hierarchies: MeasurementStructure[]

//     @OneToOne(() => MetaDataStructure)
//     @JoinColumn({ name: 'metadata_structure_Id' })
//     metadatastructure: MetaDataStructure

// }