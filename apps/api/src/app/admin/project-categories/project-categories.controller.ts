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
import { ProjectCategoriesService } from './project-categories.service';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectTypeDto } from './dto/update-project-type.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { ProjectCategoryEntity } from './entities/project-category.entity';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { ItemEntityDropdown } from '../../shared/models/item-dropdown.entity';

@ApiTags('admin/project-categories')
@Controller('admin/project-categories')
export class ProjectCategoriesController {
  constructor(private readonly projectTypeService: ProjectCategoriesService) {}

  @checkAbilities({ action: 'create', subject: 'ProjectCategory' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectCategoryEntity })
  @Post()
  async create(@Body() createProjectTypeDto: CreateProjectCategoryDto) {
    return new ProjectCategoryEntity(
      await this.projectTypeService.create(createProjectTypeDto)
    );
  }

  @checkAbilities({ action: 'read', subject: 'ProjectCategory' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectCategoryEntity, isArray: true })
  @Get()
  async findAll() {
    const projectType = await this.projectTypeService.findAll();
    return projectType.map((item) => new ProjectCategoryEntity(item));
  }

  @checkAbilities({ action: 'read', subject: 'ProjectCategory' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ItemEntityDropdown, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.projectTypeService.findAllDropdown();
    return items.map((item) => new ItemEntityDropdown(item));
  }

  @checkAbilities({ action: 'read', subject: 'ProjectCategory' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectCategoryEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ProjectCategoryEntity(await this.projectTypeService.findOne(id));
  }

  @checkAbilities({ action: 'update', subject: 'ProjectCategory' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectCategoryEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProjectTypeDto: UpdateProjectTypeDto
  ) {
    return new ProjectCategoryEntity(
      await this.projectTypeService.update(id, updateProjectTypeDto)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'ProjectCategory' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectCategoryEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ProjectCategoryEntity(await this.projectTypeService.remove(id));
  }
}
