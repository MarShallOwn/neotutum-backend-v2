import { IsString, IsEnum, IsOptional, Length, IsNumber } from 'class-validator';
import { ENTITY_STATUS } from 'src/lib/constants';

export class UpdateServiceChainDto {
    @IsOptional()
    @Length(5, 100)
    @IsString()
    name!: string;

    @IsOptional()
    @IsEnum(ENTITY_STATUS)
    @IsString()
    status!: string;
}