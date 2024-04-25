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
import { ProjectCategoriesService } from './project-categories.service';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectCategoryDto } from './dto/update-project-category.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { ProjectCategoryEntity } from './entities/project-category.entity';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { ItemEntityDropdown } from '../../shared/models/item-dropdown.entity';
import { UniqueValidatorOptionsQuery } from '../../shared/models/unique-validator-options.query';

@ApiTags('admin/project-categories')
@Controller('admin/project-categories')
export class ProjectCategoriesController {
  constructor(
    private readonly projectCategoriesService: ProjectCategoriesService
  ) {}

  @checkAbilities({ action: 'create', subject: 'ProjectCategory' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectCategoryEntity })
  @Post()
  async create(@Body() createProjectTypeDto: CreateProjectCategoryDto) {
    return new ProjectCategoryEntity(
      await this.projectCategoriesService.create(createProjectTypeDto)
    );
  }

  @checkAbilities({ action: 'read', subject: 'ProjectCategory' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectCategoryEntity, isArray: true })
  @Get()
  async findAll() {
    const projectType = await this.projectCategoriesService.findAll();
    return projectType.map((item) => new ProjectCategoryEntity(item));
  }

  @checkAbilities({ action: 'read', subject: 'ProjectCategory' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ItemEntityDropdown, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.projectCategoriesService.findAllDropdown();
    return items.map((item) => new ItemEntityDropdown(item));
  }

  @checkAbilities({ action: 'read', subject: 'ProjectCategory' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Get('exists/:code')
  async isCodeExist(
    @Param('code') code: string,
    @Query() query: UniqueValidatorOptionsQuery
  ) {
    const data = await this.projectCategoriesService.isCodeExist(code, query);
    return data;
  }

  @checkAbilities({ action: 'read', subject: 'ProjectCategory' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectCategoryEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ProjectCategoryEntity(
      await this.projectCategoriesService.findOne(id)
    );
  }

  @checkAbilities({ action: 'update', subject: 'ProjectCategory' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectCategoryEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProjectCategoryDto: UpdateProjectCategoryDto
  ) {
    return new ProjectCategoryEntity(
      await this.projectCategoriesService.update(id, updateProjectCategoryDto)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'ProjectCategory' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectCategoryEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ProjectCategoryEntity(
      await this.projectCategoriesService.remove(id)
    );
  }
}
