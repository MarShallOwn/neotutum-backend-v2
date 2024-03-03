


// import { PhysicalRiskObject } from './riskobject-physical.model';


import { CommonEntity } from "src/lib/database/common.model";
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, ManyToOne, JoinColumn, Index } from "typeorm"

@Entity("position_riskobject")
@Index(["firstName", "lastName"], { unique: true })
export class RiskObjectPosition extends CommonEntity {
    @Column({ default: 25000 })
    x: number;

    @Column({ default: 25000 })
    y: number;

    @Column({ default: 270 })
    width: number;

    @Column({ default: 170 })
    height: number;

    @Column({ nullable: true })
    z_Index: number;

    // ===========================================================================
    // Hooks
    // ===========================================================================


    // @ManyToOne(() => RiskObject, (riskobject) => riskobject.physicalRiskObjects)
    // @JoinColumn({ name: 'riskobject_Id' })
    // riskObject: RiskObject

    // @ManyToOne(() => RiskObject, (riskobject) => riskobject.physicalRiskObjects)
    // @JoinColumn({ name: 'riskassessment_Id' })
    // riskObject: RiskObject
}


//   const RiskObjectsPositions = sequelize.define('RiskObjectsPositions', {
//     x: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 0
//     },
//     y: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 0
//     },
//     default: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 1
//     },
//     enabled: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 1
//     },
// width: {
//   type: DataTypes.INTEGER,
//   allowNull: true,
//   defaultValue: 270
// },
// height: {
//   type: DataTypes.INTEGER,
//   allowNull: true,
//   defaultValue: 170
// },
// zIndex: {
//   type: DataTypes.INTEGER,
//   allowNull: true,
//   defaultValue: null
// },
//     // chartIndex: {
//     //   type: DataTypes.INTEGER,
//     //   defaultValue: 0
//     // },
//     ...commonSchema
//   });

//   return RiskObjectsPositions
// };

