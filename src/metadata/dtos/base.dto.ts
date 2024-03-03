import { Expose } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, } from 'class-validator';

export class BaseDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsBoolean()
    deleted?: boolean;
}