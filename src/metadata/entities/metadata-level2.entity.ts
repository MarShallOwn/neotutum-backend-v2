import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { MetaDataLevel1 } from './metadata-level1.entity';
import { CommonEntity } from 'src/lib/database/common.model';

@Entity("metadata_level2")
export class MetaDataLevel2 extends CommonEntity {
    @Column({ length: 100 })
    name: string;

    @Column({ default: false })
    analytics_generated: boolean;

    @Column({ name: 'metadata_level1_id' })
    metaDataLevel1Id: number;

    // ===========================================================================
    // Hooks
    // ===========================================================================

    // ===========================================================================
    // Associations
    // ===========================================================================
    @ManyToOne(() => MetaDataLevel1, (metadatalevel1) => metadatalevel1.metadatalevel2s)
    @JoinColumn({ name: 'metadata_level1_id', })
    metadatalevel1: MetaDataLevel1
}