import { CreateMetaDataLevel1Dto, CreateMetaDataLevel2Dto, CreateMetaDataStructureDto, UpdateMetaDataLevel1Dto, UpdateMetaDataLevel2Dto, UpdateMetaDataStructureDto } from "src/metadata/dtos"
import { MetaDataLevel1, MetaDataLevel2, MetaDataStructure } from "src/metadata/entities"

export type MetaDataCreateDtos = CreateMetaDataStructureDto | CreateMetaDataLevel1Dto | CreateMetaDataLevel2Dto
export type MetaDataUpdateDtos = UpdateMetaDataStructureDto | UpdateMetaDataLevel1Dto | UpdateMetaDataLevel2Dto
export type MetaDataEntityTypes = MetaDataStructure | MetaDataLevel1 | MetaDataLevel2