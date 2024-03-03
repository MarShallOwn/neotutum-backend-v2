import { PartialType } from '@nestjs/mapped-types';
import { CreateMetaDataStructureDto } from './create-metadata-structure.dto';

export class UpdateMetaDataStructureDto extends PartialType(CreateMetaDataStructureDto) { }