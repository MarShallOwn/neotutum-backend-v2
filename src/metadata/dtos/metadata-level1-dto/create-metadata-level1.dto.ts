import { IsDefined, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, Length, MaxLength, } from 'class-validator';
import { BaseDto } from '../base.dto';
import { Exclude, Expose, Transform } from 'class-transformer';

export class CreateMetaDataLevel1Dto extends BaseDto {
    @IsNumber()
    @Expose({ name: 'metaDataStructureId' })
    metadata_structure_id: number;
}

