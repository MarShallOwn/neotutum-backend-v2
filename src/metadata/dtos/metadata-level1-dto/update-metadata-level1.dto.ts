import { PartialType } from '@nestjs/mapped-types';
import { CreateMetaDataLevel1Dto } from './create-metadata-level1.dto';

export class UpdateMetaDataLevel1Dto extends PartialType(CreateMetaDataLevel1Dto) { }