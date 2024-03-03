import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, ManyToOne, JoinColumn, RelationId } from "typeorm"
import { MetaDataLevel2 } from './metadata-level2.entity';
import { MetaDataStructure } from './metadata-structure.entity';
import { CommonEntity } from 'src/lib/database/common.model';
import { MaxLength } from "class-validator";

@Entity("metadata_level1")
export class MetaDataLevel1 extends CommonEntity {
    @MaxLength(100)
    @Column({ length: 100 })
    name: string;

    @Column({ name: 'metadata_structure_id' })
    metaDataStructureId: number;
    // ===========================================================================
    // Hooks
    // ===========================================================================

    // ===========================================================================
    // Associations
    // ===========================================================================
    @OneToMany(() => MetaDataLevel2, (metadatalevel2) => metadatalevel2.metadatalevel1)
    metadatalevel2s: MetaDataLevel2[]

    @ManyToOne(() => MetaDataStructure)
    @JoinColumn({ name: 'metadata_structure_id', referencedColumnName: 'id' })
    metadatastructure: MetaDataStructure
}