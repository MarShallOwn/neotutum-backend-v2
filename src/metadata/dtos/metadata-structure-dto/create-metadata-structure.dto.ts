import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length, MaxLength, } from 'class-validator';
import { BaseDto } from '../base.dto';
import { ENTITY_STATUS } from 'src/lib/constants';
import { Expose } from 'class-transformer';

export class CreateMetaDataStructureDto extends BaseDto {
    @IsOptional()
    @IsEnum(ENTITY_STATUS)
    @IsString()
    status?: string;

    @IsOptional()
    @Expose({ name: 'referenceGroupId' })
    @IsNumber()
    measurement_system_id?: number;
}