import { IsBoolean, IsOptional, IsString, } from 'class-validator';
import { Exclude, Expose, Transform } from 'class-transformer';
import { FilterDto } from '../filter.dto';

export class GetMetaDataLevel1Dto extends FilterDto {
    @IsOptional()
    @IsString()
    name?: string;
}