import { ENTITY_STATUS } from 'src/lib/constants';
import { CommonEntity } from 'src/lib/database/common.model';


import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { MeasurementStructure } from './measurement-structure.entity';
import { MetaDataStructure } from 'src/metadata/entities';
import { Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';

@Entity("measurement_system")
export class MeasurementSystem extends CommonEntity {
    @Column({ length: 100 })
    name: string;

    @Column({ type: 'enum', enum: ENTITY_STATUS, default: ENTITY_STATUS.DRAFTED })
    status: string;

    @Column({ name: 'metadata_structure_id' })
    metaDataStructureId: number;
    // ===========================================================================
    // Hooks
    // ===========================================================================

    // ===========================================================================
    // Associations
    // ===========================================================================


    @OneToOne(() => MetaDataStructure)
    @JoinColumn({ name: 'metadata_structure_id' })
    metadatastructure: MetaDataStructure
}