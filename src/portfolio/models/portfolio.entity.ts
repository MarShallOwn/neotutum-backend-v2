import { ENTITY_STATUS } from 'src/lib/constants';
import { CommonEntity } from 'src/lib/database/common.model';
import { ServiceChain } from 'src/servicechain/models';


import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, ManyToOne, JoinColumn } from "typeorm"

@Entity("portfolio")
export class Portfolio extends CommonEntity {
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
    @OneToMany(() => ServiceChain, (servicechain) => servicechain.portfolio)
    servicechains: ServiceChain[]
}