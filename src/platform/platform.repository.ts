import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PlatForm } from './models';

export interface PlatFormRepository extends Repository<PlatForm> {
    this: Repository<PlatForm>;
    /**
     * testing 123
     */
    findDone(): Promise<PlatForm>;
    findPending(): Promise<PlatForm>;
}

export const ExtendedPlatFormRepository: Pick<
    PlatFormRepository,
    'findDone' | 'findPending'
> = {
    findDone(this: Repository<PlatForm>) {
        return this.findOne({})
    },
    findPending(this: Repository<PlatForm>) {
        return this.findOne({})
    },
};