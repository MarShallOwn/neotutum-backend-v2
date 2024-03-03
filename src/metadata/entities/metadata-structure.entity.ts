import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { MetaDataLevel1 } from './metadata-level1.entity';
import { CommonEntity } from 'src/lib/database/common.model';
import { ENTITY_STATUS } from 'src/lib/constants';
import { IsNumber } from "class-validator";
import { Expose } from "class-transformer";

@Entity("metadata_structure")
export class MetaDataStructure extends CommonEntity {
    @Column({ length: 100, unique: true })
    name: string;

    @Column({ type: 'enum', enum: ENTITY_STATUS, default: ENTITY_STATUS.DRAFTED })
    status: string;

    @IsNumber()
    @Expose({ name: 'metaDataStructureId' })
    @Column({ nullable: true })
    measurement_system_id: number;

    // ===========================================================================
    // Hooks
    // ===========================================================================

    // ===========================================================================
    // Associations
    // ===========================================================================
    @OneToMany(() => MetaDataLevel1, (metadatalevel1) => metadatalevel1.metadatastructure)
    metadatalevel1s: MetaDataLevel1[]
}