import { Module } from '@nestjs/common';
import { PlatformController } from './platform.controller';
import { PlatformService } from './platform.service';
import { PlatForm, } from './models';
import { DataSource } from 'typeorm';
import { getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { ExtendedPlatFormRepository } from './platform.repository';
@Module({
  controllers: [PlatformController],
  providers: [
    PlatformService,
    {
      provide: getRepositoryToken(PlatForm),
      useFactory(dataSource: DataSource) {
        return dataSource
          .getRepository(PlatForm)
          .extend(ExtendedPlatFormRepository);
      },
      inject: [getDataSourceToken()],
    },
  ]
})
export class PlatformModule { }
