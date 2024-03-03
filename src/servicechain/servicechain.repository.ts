import { Repository } from 'typeorm';
import { ServiceChain } from './models';

export interface ServiceChainRepository extends Repository<ServiceChain> {
    this: Repository<ServiceChain>;
    /**
     * testing 123
     */
    findDone(): Promise<ServiceChain>;
    findPending(): Promise<ServiceChain>;
}

export const ExtendedServiceChainRepository: Pick<
    ServiceChainRepository,
    'findDone' | 'findPending'
> = {
    findDone(this: Repository<ServiceChain>) {
        return this.findOne({})
    },
    findPending(this: Repository<ServiceChain>) {
        return this.findOne({})
    },
};