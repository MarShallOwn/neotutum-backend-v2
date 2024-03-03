import { PartialType } from '@nestjs/mapped-types';
import { CreateReferencegroupDto } from './create-referencegroup.dto';

export class UpdateReferencegroupDto extends PartialType(CreateReferencegroupDto) {}
