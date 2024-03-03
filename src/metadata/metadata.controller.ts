import { Body, Controller, Delete, Get, Param, Patch, Post, Query, } from '@nestjs/common';
import { MetaDataService } from './metadata.service';
import { CreateMetaDataLevel1Dto, CreateMetaDataStructureDto, UpdateMetaDataStructureDto } from './dtos';
import { MetaDataTypes } from 'src/lib/enums';
import { FilterDto } from './dtos/filter.dto';
// import { classToPlain, instanceToPlain } from 'class-transformer';

// ValidationPipe: Handles request payload validation and transformation into DTO instances.
// ClassSerializerInterceptor: Handles response payload transformation based on the rules specified in DTO classes (@Expose, for example).
// You need both because they serve different purposes: one for request processing and the other for response processing.

@Controller('metadata')
export class MetadataController {
    constructor(
        private readonly metaDataService: MetaDataService,
    ) { }

    // route: get metadata structure (nested)

    // metadata-structure-routes
    @Post('structure')
    create(
        @Body() createMetaDataStructureDto: CreateMetaDataStructureDto
    ) {
        return this.metaDataService.create(createMetaDataStructureDto, MetaDataTypes.MetaDataStructure);
    }

    @Get('structure')
    findAll(
        @Query() filterDto: FilterDto
    ) {
        return this.metaDataService.findAll(MetaDataTypes.MetaDataStructure, {}, { withDeleted: filterDto.deleted || false })
    }

    @Get('structure/:id')
    findOne(
        @Param('id') id: number,
        @Query() filterDto: FilterDto
    ) {
        return this.metaDataService.findOne(MetaDataTypes.MetaDataStructure, { id }, { withDeleted: filterDto.deleted || false })
    }

    @Patch('structure/:id')
    update(
        @Param('id') id: number,
        @Body() updateMetaDataStructureDto: UpdateMetaDataStructureDto
    ) {
        this.metaDataService.update(id, updateMetaDataStructureDto, MetaDataTypes.MetaDataStructure)
    }

    @Delete('structure/:id')
    remove(
        @Param('id') id: number,
        @Query() filterDto: FilterDto
    ) {
        return this.metaDataService.remove(id, filterDto.paranoid, MetaDataTypes.MetaDataStructure);
    }

    // metadata-level1-routes
    // metadata-level2-routes
}
