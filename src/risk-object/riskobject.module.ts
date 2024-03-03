import { Module } from '@nestjs/common';
import { RiskobjectsController } from './riskobject.controller';
import { RiskobjectsService } from './riskobject.service';
import { RiskObject } from './models/riskobject.entity';
import { ExtendedRiskObjectRepository } from './riskobject.repository';
import { TypeOrmModule, getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { PhysicalRiskObject } from './models/riskobject-physical.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RiskObject, PhysicalRiskObject])],
  controllers: [RiskobjectsController],
  providers: [
    RiskobjectsService,
    {
      provide: getRepositoryToken(RiskObject),
      useFactory(dataSource: DataSource) {
        return dataSource
          .getRepository(RiskObject)
          .extend(ExtendedRiskObjectRepository);
      },
      inject: [getDataSourceToken()],
    },
  ]
})
export class RiskobjectsModule { }

