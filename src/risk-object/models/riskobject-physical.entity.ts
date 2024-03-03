

// export class PhysicalRiskObject extends CommonModel<PhysicalRiskObject> {
//     @Column({ type: DataType.STRING(100), allowNull: false })
//     bpmnDataObjectId: string;

//     @Column({ type: DataType.INTEGER, allowNull: false })
//     fileId: number;

//     @ForeignKey(() => RiskObject)
//     @Column({ type: DataType.INTEGER })
//     riskobject_Id: number;
// }


// import { PhysicalRiskObject } from './riskobject-physical.model';


import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { RiskObject } from './riskobject.entity';
import { CommonEntity } from "src/lib/database/common.model";

@Entity("physical_riskobject")
export class PhysicalRiskObject extends CommonEntity {
    @Column()
    bpmnDataObjectId: string;

    @Column()
    fileId: number;

    // @Column({ type: 'enum', enum: RISKOBJECT_TYPES, default: RISKOBJECT_TYPES.VIRTUAL })
    // riskobject_Id: number;

    // ===========================================================================
    // Hooks
    // ===========================================================================

    @ManyToOne(() => RiskObject, (riskobject) => riskobject.physicalRiskObjects)
    @JoinColumn({ name: 'riskobject_id' })
    riskObject: RiskObject
}