import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { ProjectTypesService } from './project-types.service';
import { CreateProjectTypeDto } from './dto/create-project-type.dto';
import { UpdateProjectTypeDto } from './dto/update-project-type.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { ProjectTypeEntity } from './entities/project-type.entity';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { ItemEntityDropdown } from '../../shared/models/item-dropdown.entity';

@ApiTags('admin/project-types')
@Controller('admin/project-types')
export class ProjectTypesController {
  constructor(private readonly projectTypeService: ProjectTypesService) {}

  @checkAbilities({ action: 'create', subject: 'ProjectType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectTypeEntity })
  @Post()
  async create(@Body() createProjectTypeDto: CreateProjectTypeDto) {
    return new ProjectTypeEntity(
      await this.projectTypeService.create(createProjectTypeDto)
    );
  }

  @checkAbilities({ action: 'read', subject: 'ProjectType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectTypeEntity, isArray: true })
  @Get()
  async findAll() {
    const projectType = await this.projectTypeService.findAll();
    return projectType.map((item) => new ProjectTypeEntity(item));
  }

  @checkAbilities({ action: 'read', subject: 'ProjectType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ItemEntityDropdown, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.projectTypeService.findAllDropdown();
    return items.map((item) => new ItemEntityDropdown(item));
  }

  @checkAbilities({ action: 'read', subject: 'ProjectType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectTypeEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ProjectTypeEntity(await this.projectTypeService.findOne(id));
  }

  @checkAbilities({ action: 'update', subject: 'ProjectType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectTypeEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProjectTypeDto: UpdateProjectTypeDto
  ) {
    return new ProjectTypeEntity(
      await this.projectTypeService.update(id, updateProjectTypeDto)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'ProjectType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectTypeEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ProjectTypeEntity(await this.projectTypeService.remove(id));
  }
}
