import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReferencegroupService } from './referencegroup.service';
import { CreateReferencegroupDto } from './dto/create-referencegroup.dto';
import { UpdateReferencegroupDto } from './dto/update-referencegroup.dto';

@Controller('referencegroup')
export class ReferencegroupController {
  constructor(private readonly referencegroupService: ReferencegroupService) {}

  @Post()
  create(@Body() createReferencegroupDto: CreateReferencegroupDto) {
    return this.referencegroupService.create(createReferencegroupDto);
  }

  @Get()
  findAll() {
    return this.referencegroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.referencegroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReferencegroupDto: UpdateReferencegroupDto) {
    return this.referencegroupService.update(+id, updateReferencegroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.referencegroupService.remove(+id);
  }
}
