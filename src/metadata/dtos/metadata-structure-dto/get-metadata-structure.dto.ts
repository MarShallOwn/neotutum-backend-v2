import { PartialType } from '@nestjs/mapped-types';
import { UpdateMetaDataStructureDto } from './update-metadata-structure.dto';

export class GetMetaDataStructureDto extends PartialType(UpdateMetaDataStructureDto) { }