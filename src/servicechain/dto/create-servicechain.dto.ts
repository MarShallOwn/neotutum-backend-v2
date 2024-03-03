import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length, MaxLength, } from 'class-validator';
import { ENTITY_STATUS } from 'src/lib/constants';

export class CreateServiceChainDto {
    @IsString()
    @Length(5, 100)
    name: string;

    @IsOptional()
    @IsEnum(ENTITY_STATUS)
    @IsString()
    status!: string;

    @IsNumber()
    portfolioId: number
}