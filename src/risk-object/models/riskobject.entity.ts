// import { PhysicalRiskObject } from './riskobject-physical.model';


import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { PhysicalRiskObject } from './riskobject-physical.entity';
import { ENTITY_STATUS, RISKOBJECT_TYPES } from "src/lib/constants";
import { CommonEntity } from "src/lib/database/common.model";

@Entity("riskobject")
export class RiskObject extends CommonEntity {
    @Column({ length: 100 })
    name: string;

    @Column({ nullable: true, type: 'text' })
    description: string;

    @Column({ type: 'enum', enum: ENTITY_STATUS, default: ENTITY_STATUS.DRAFTED })
    status: string;

    @Column({ type: 'enum', enum: RISKOBJECT_TYPES, default: RISKOBJECT_TYPES.VIRTUAL })
    type: string;

    @Column({ nullable: true, type: 'text' })
    statement: string;

    @Column({ nullable: true, type: 'text' })
    impact: string;

    @Column({ nullable: true, type: 'text' })
    riskFailureMode: string;

    @Column({ nullable: true, type: 'text' })
    causeFailureMechanism: string;

    @Column({ default: 0 })
    faceIndex: number;

    @Column({ default: 0 })
    chartIndex: number;

    // ===========================================================================
    // Hooks
    // ===========================================================================

    @BeforeInsert()
    updateTypes() {
        if (this.type) this.type = this.type.toLowerCase()
    }

    @OneToMany(() => PhysicalRiskObject, (physicalriskobject) => physicalriskobject.riskObject)
    physicalRiskObjects: PhysicalRiskObject[]
}