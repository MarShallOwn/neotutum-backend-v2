import { Type } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsNumber, IsString, IsEnum, IsDefined, ValidateNested, IsOptional } from 'class-validator';
import { Max } from 'sequelize-typescript';
import { ENTITY_STATUS, RISKOBJECT_TYPES } from 'src/lib/constants';
import { CreatePhsyicalRiskObjectDto } from './create-riskobject-physical.dto';

// TODO: add validation messages ex:   @MinLength(10, { message: 'Title is too short' })
export class CreateRiskObjectDto {
    @MaxLength(100)
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @MaxLength(20)
    @IsEnum(RISKOBJECT_TYPES)
    @IsString()
    type!: string;

    @IsOptional()
    @MaxLength(50)
    @IsEnum(ENTITY_STATUS)
    @IsString()
    status!: string;

    @IsOptional()
    @IsString()
    description!: string;

    @IsOptional()
    @IsString()
    statement!: string;

    @IsOptional()
    @IsString()
    impact!: string;

    @IsOptional()
    @IsString()
    riskFailureMode!: string;

    @IsOptional()
    @IsString()
    causeFailureMechanism!: string;

    @IsOptional()
    @IsNumber()
    faceIndex!: number;

    @IsOptional()
    @IsNumber()
    chartIndex!: number;

    @ValidateNested()
    @Type(() => CreatePhsyicalRiskObjectDto)
    physicalRiskObject!: CreatePhsyicalRiskObjectDto;
}
