import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length, MaxLength } from 'class-validator';
import { BaseDto } from '../base.dto';
import { Expose } from 'class-transformer';

export class CreateMetaDataLevel2Dto extends BaseDto {
    @IsNumber()
    @Expose({ name: 'metadata_level1_id' })
    metaDataLevel1Id: number;
}