import { ENTITY_STATUS } from 'src/lib/constants';
import { CommonEntity } from 'src/lib/database/common.model';
import { PlatForm } from 'src/platform/models';
import { Portfolio } from 'src/portfolio/models';


import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, ManyToOne, JoinColumn } from "typeorm"

@Entity("servicechain")
export class ServiceChain extends CommonEntity {
    @Column({ length: 100 })
    name: string;

    @Column({ type: 'enum', enum: ENTITY_STATUS, default: ENTITY_STATUS.DRAFTED })
    status: string;

    // ===========================================================================
    // Hooks
    // ===========================================================================

    // ===========================================================================
    // Associations
    // ===========================================================================
    @ManyToOne(() => Portfolio, (portfolio) => portfolio.servicechains)
    @JoinColumn({ name: 'portfolio_Id' })
    portfolio: Portfolio

    @OneToMany(() => PlatForm, (platform) => platform.servicechain)
    platforms: PlatForm[]
}