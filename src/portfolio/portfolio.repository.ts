import { Repository } from 'typeorm';
import { Portfolio } from './models';

export interface PortfolioRepository extends Repository<Portfolio> {
    this: Repository<Portfolio>;
    /**
     * testing 123
     */
    findDone(): Promise<Portfolio>;
    findPending(): Promise<Portfolio>;
}

export const ExtendedPortfolioRepository: Pick<
    PortfolioRepository,
    'findDone' | 'findPending'
> = {
    findDone(this: Repository<Portfolio>) {
        return this.findOne({})
    },
    findPending(this: Repository<Portfolio>) {
        return this.findOne({})
    },
};