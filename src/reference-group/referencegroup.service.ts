import { Injectable } from '@nestjs/common';
import { CreateReferencegroupDto } from './dto/create-referencegroup.dto';
import { UpdateReferencegroupDto } from './dto/update-referencegroup.dto';

@Injectable()
export class ReferencegroupService {
  create(createReferencegroupDto: CreateReferencegroupDto) {
    return 'This action adds a new referencegroup';
  }

  findAll() {
    return `This action returns all referencegroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} referencegroup`;
  }

  update(id: number, updateReferencegroupDto: UpdateReferencegroupDto) {
    return `This action updates a #${id} referencegroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} referencegroup`;
  }
}
