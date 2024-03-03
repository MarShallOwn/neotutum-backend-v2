import { Exclude, Expose, Transform } from 'class-transformer';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class CommonEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 1, })
    creator_id: string;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Transform(({ value }) => {
        if (value === null || value === undefined) {
            return undefined;
        } else {
            return value;
        }
    })
    @DeleteDateColumn()
    deletedAt: Date
}
