import { Module } from '@nestjs/common';
import { MeasurementSystemController } from './measurement-system.controller';
import { MeasurementSystemService } from './measurement-system.service';
import { TypeOrmModule, getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { MeasurementSystem, MeasurementStructure } from './entities';
import { DataSource } from 'typeorm';
import { MeasurementSystemRepository } from './repositories/measurement-system.repository';
import { MetadataModule } from 'src/metadata/metadata.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MeasurementSystem, MeasurementStructure]),
    MetadataModule
  ],
  controllers: [MeasurementSystemController],
  providers: [
    MeasurementSystemService,
    // {
    //   provide: getRepositoryToken(MeasurementSystem),
    //   useFactory(dataSource: DataSource) {
    //     return dataSource
    //       .getRepository(MeasurementSystem)
    //       .extend(ExtendedMeasurementSystemRepository);
    //   },
    //   inject: [getDataSourceToken()],
    // },
    {
      provide: 'ExtendedMeasurementSystemRepository',
      useClass: MeasurementSystemRepository,
    },
  ]
})
export class MeasurementSystemModule { }
