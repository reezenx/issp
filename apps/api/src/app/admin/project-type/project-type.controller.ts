import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { ProjectTypeService } from './project-type.service';
import { CreateProjectTypeDto } from './dto/create-project-type.dto';
import { UpdateProjectTypeDto } from './dto/update-project-type.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { ProjectTypeEntity } from './entities/project-type.entity';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';

@ApiTags('admin/project-type')
@Controller('admin/project-type')
export class ProjectTypeController {
  constructor(private readonly projectTypeService: ProjectTypeService) {}

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
