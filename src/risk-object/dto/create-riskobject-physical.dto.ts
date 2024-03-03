import { IsNotEmpty, IsNumber, } from 'class-validator';

export class CreatePhsyicalRiskObjectDto {
    @IsNotEmpty()
    bpmnDataObjectId: string;

    @IsNumber()
    fileId: number;
}