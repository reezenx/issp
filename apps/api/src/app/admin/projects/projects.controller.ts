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
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CurrentUser } from '@issp/api-auth';
import { User } from '@prisma/client';
import { ApiTags, ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { ProjectEntity } from './entities/project.entity';

@ApiTags('admin/projects')
@Controller('admin/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @checkAbilities({ action: 'create', subject: 'Project' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectEntity })
  @Post()
  async create(
    @Body() createProjectDto: CreateProjectDto,
    @CurrentUser() user: User
  ) {
    return new ProjectEntity(
      await this.projectsService.create(createProjectDto, user)
    );
  }

  @checkAbilities({ action: 'read', subject: 'Project' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectEntity, isArray: true })
  @Get()
  async findAll() {
    const categories = await this.projectsService.findAll();
    return categories.map((item) => new ProjectEntity(item));
  }

  @checkAbilities({ action: 'read', subject: 'Project' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ProjectEntity(await this.projectsService.findOne(id));
  }

  @checkAbilities({ action: 'update', subject: 'Project' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
    @CurrentUser() user: User
  ) {
    return new ProjectEntity(
      await this.projectsService.update(id, updateProjectDto, user)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'Project' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ProjectEntity(await this.projectsService.remove(id));
  }
}
