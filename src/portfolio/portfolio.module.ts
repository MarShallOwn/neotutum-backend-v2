import { Module } from '@nestjs/common';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';
import { getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { Portfolio } from './models';
import { DataSource } from 'typeorm';
import { ExtendedPortfolioRepository } from './portfolio.repository';

@Module({
  controllers: [PortfolioController],
  providers: [
    PortfolioService,
    {
      provide: getRepositoryToken(Portfolio),
      useFactory(dataSource: DataSource) {
        return dataSource
          .getRepository(Portfolio)
          .extend(ExtendedPortfolioRepository);
      },
      inject: [getDataSourceToken()],
    },
  ]
})
export class PortfolioModule { }
