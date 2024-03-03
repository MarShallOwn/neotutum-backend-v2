import { Expose } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, } from 'class-validator';

export class FilterDto {
    @IsOptional()
    @IsBoolean()
    deleted?: boolean;

    @IsOptional()
    @IsBoolean()
    paranoid?: boolean;
}