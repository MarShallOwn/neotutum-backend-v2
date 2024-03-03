import { Module } from '@nestjs/common';
import { MetadataController } from './metadata.controller';
import { MetaDataService } from './metadata.service';
import {
  MetaDataLevel1Repository,
  MetaDataLevel2Repository,
  MetaDataStructureRepository,
} from './repositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaDataLevel1, MetaDataLevel2, MetaDataStructure } from './entities';
import { MetaDataStructureService } from './services/metadata-structure.service';
import { MetaDataLevel1Service } from './services/metadata-level1.service';
import { MetaDataLevel2Service } from './services/metadata-level2.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MetaDataLevel1,
      MetaDataLevel2,
      MetaDataStructure,
    ]),
  ],
  controllers: [MetadataController],
  providers: [
    MetaDataService,
    MetaDataStructureService,
    MetaDataLevel1Service,
    MetaDataLevel2Service,
    {
      provide: 'ExtendedMetaDataStructureRepository',
      useClass: MetaDataStructureRepository,
    },
    {
      provide: 'ExtendedMetaDataLevel1Repository',
      useClass: MetaDataLevel1Repository,
    },
    {
      provide: 'ExtendedMetaDataLevel2Repository',
      useClass: MetaDataLevel2Repository,
    },
  ],
})
export class MetadataModule { }
