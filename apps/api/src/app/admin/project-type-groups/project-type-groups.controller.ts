import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProjectTypeGroupsService } from './project-type-groups.service';
import { CreateProjectTypeGroupDto } from './dto/create-project-type-group.dto';
import { UpdateProjectTypeGroupDto } from './dto/update-project-type-group.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ProjectTypeGroupEntity } from './entities/project-type-group.entity';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { ItemEntityDropdown } from '../../shared/models/item-dropdown.entity';

@ApiTags('admin/project-type-groups')
@Controller('admin/project-type-groups')
export class ProjectTypeGroupsController {
  constructor(
    private readonly projectTypeGroupsService: ProjectTypeGroupsService
  ) {}

  @checkAbilities({ action: 'create', subject: 'ProjectTypeGroup' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectTypeGroupEntity })
  @Post()
  async create(@Body() createProjectTypeGroupDto: CreateProjectTypeGroupDto) {
    return new ProjectTypeGroupEntity(
      await this.projectTypeGroupsService.create(createProjectTypeGroupDto)
    );
  }

  @checkAbilities({ action: 'read', subject: 'ProjectTypeGroup' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectTypeGroupEntity, isArray: true })
  @Get()
  async findAll() {
    const projectTypeGroup = await this.projectTypeGroupsService.findAll();
    return projectTypeGroup.map((item) => new ProjectTypeGroupEntity(item));
  }

  @checkAbilities({ action: 'read', subject: 'ProjectTypeGroup' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ItemEntityDropdown, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.projectTypeGroupsService.findAllDropdown();
    return items.map((item) => new ItemEntityDropdown(item));
  }

  @checkAbilities({ action: 'read', subject: 'ProjectTypeGroup' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectTypeGroupEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ProjectTypeGroupEntity(
      await this.projectTypeGroupsService.findOne(id)
    );
  }

  @checkAbilities({ action: 'update', subject: 'ProjectTypeGroup' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectTypeGroupEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdateProjectTypeGroupDto: UpdateProjectTypeGroupDto
  ) {
    return new ProjectTypeGroupEntity(
      await this.projectTypeGroupsService.update(id, UpdateProjectTypeGroupDto)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'ProjectTypeGroup' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectTypeGroupEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ProjectTypeGroupEntity(
      await this.projectTypeGroupsService.remove(id)
    );
  }
}
