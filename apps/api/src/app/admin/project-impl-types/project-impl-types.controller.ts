import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
  Query,
} from '@nestjs/common';
import { ProjectImplTypesService } from './project-impl-types.service';
import { CreateProjectImplTypeDto } from './dto/create-project-impl-type.dto';
import { UpdateProjectImplTypeDto } from './dto/update-project-impl-type.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ProjectImplementationTypeEntity } from './entities/project-impl-type.entity';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { ItemEntityDropdown } from '../../shared/models/item-dropdown.entity';
import { UniqueValidatorOptionsQuery } from '../../shared/models/unique-validator-options.query';

@ApiTags('admin/project-impl-types')
@Controller('admin/project-impl-types')
export class ProjectImplTypesController {
  constructor(
    private readonly projectImplTypesService: ProjectImplTypesService
  ) {}

  @checkAbilities({ action: 'create', subject: 'ImplementationType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectImplementationTypeEntity })
  @Post()
  async create(@Body() createProjectImplTypeDto: CreateProjectImplTypeDto) {
    return new ProjectImplementationTypeEntity(
      await this.projectImplTypesService.create(createProjectImplTypeDto)
    );
  }

  @checkAbilities({ action: 'read', subject: 'ImplementationType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectImplementationTypeEntity, isArray: true })
  @Get()
  async findAll() {
    const projectImplTypes = await this.projectImplTypesService.findAll();
    return projectImplTypes.map(
      (item) => new ProjectImplementationTypeEntity(item)
    );
  }

  @checkAbilities({ action: 'read', subject: 'ImplementationType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ItemEntityDropdown, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.projectImplTypesService.findAllDropdown();
    return items.map((item) => new ItemEntityDropdown(item));
  }

  @checkAbilities({ action: 'read', subject: 'ImplementationType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Get('exists/:code')
  async isCodeExist(
    @Param('code') code: string,
    @Query() query: UniqueValidatorOptionsQuery
  ) {
    const data = await this.projectImplTypesService.isCodeExist(code, query);
    return data;
  }

  @checkAbilities({ action: 'read', subject: 'ImplementationType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectImplementationTypeEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ProjectImplementationTypeEntity(
      await this.projectImplTypesService.findOne(id)
    );
  }

  @checkAbilities({ action: 'update', subject: 'ImplementationType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectImplementationTypeEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProjectImplTypeDto: UpdateProjectImplTypeDto
  ) {
    return new ProjectImplementationTypeEntity(
      await this.projectImplTypesService.update(id, updateProjectImplTypeDto)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'ImplementationType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectImplementationTypeEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ProjectImplementationTypeEntity(
      await this.projectImplTypesService.remove(id)
    );
  }
}
