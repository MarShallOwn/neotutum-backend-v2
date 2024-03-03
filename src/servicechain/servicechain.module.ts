import { Module } from '@nestjs/common';
import { ServicechainController } from './servicechain.controller';
import { ServicechainService } from './servicechain.service';
import { getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { ServiceChain } from './models';
import { DataSource } from 'typeorm';
import { ExtendedServiceChainRepository } from './servicechain.repository';

@Module({
  controllers: [ServicechainController],
  providers: [
    ServicechainService,
    {
      provide: getRepositoryToken(ServiceChain),
      useFactory(dataSource: DataSource) {
        return dataSource
          .getRepository(ServiceChain)
          .extend(ExtendedServiceChainRepository);
      },
      inject: [getDataSourceToken()],
    },
  ]
})
export class ServicechainModule { }
