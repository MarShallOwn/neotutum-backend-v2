import { PartialType } from '@nestjs/mapped-types';
import { CreateMetaDataLevel2Dto } from './create-metadata-level2.dto';

export class UpdateMetaDataLevel2Dto extends PartialType(CreateMetaDataLevel2Dto) { }