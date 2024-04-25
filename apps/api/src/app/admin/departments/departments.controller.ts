import { ItemEntityDropdown } from './../../shared/models/item-dropdown.entity';
import { AbilitiesGuard } from './../../auth/guard/abilities.guard';
import { checkAbilities } from './../../auth/decorators/abilities.decorator';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { DepartmentEntity } from './entities/department.entity';
import { UniqueValidatorOptionsQuery } from '../../shared/models/unique-validator-options.query';
@ApiTags('admin/departments')
@Controller('admin/departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @checkAbilities({ action: 'create', subject: 'Department' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: DepartmentEntity })
  @Post()
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return new DepartmentEntity(
      await this.departmentsService.create(createDepartmentDto)
    );
  }

  @checkAbilities({ action: 'read', subject: 'Department' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: DepartmentEntity, isArray: true })
  @Get()
  async findAll() {
    const departments = await this.departmentsService.findAll();
    return departments.map((item) => new DepartmentEntity(item));
  }

  @checkAbilities({ action: 'read', subject: 'Department' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ItemEntityDropdown, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.departmentsService.findAllDropdown();
    return items.map((item) => new ItemEntityDropdown(item));
  }

  @checkAbilities({ action: 'read', subject: 'Department' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: DepartmentEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new DepartmentEntity(await this.departmentsService.findOne(id));
  }

  @checkAbilities({ action: 'read', subject: 'Department' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Get('exists/:code')
  async isCodeExist(
    @Param('code') code: string,
    @Query() query: UniqueValidatorOptionsQuery
  ) {
    const data = await this.departmentsService.isCodeExist(code, query);
    return data;
  }

  @checkAbilities({ action: 'read', subject: 'Department' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Get('exist/:uacs')
  async isUACSExist(
    @Param('uacs') uacs: string,
    @Query() query: UniqueValidatorOptionsQuery
  ) {
    const data = await this.departmentsService.isUACSExist(uacs, query);
    return data;
  }

  @checkAbilities({ action: 'update', subject: 'Department' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: DepartmentEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto
  ) {
    return new DepartmentEntity(
      await this.departmentsService.update(id, updateDepartmentDto)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'Department' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: DepartmentEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new DepartmentEntity(await this.departmentsService.remove(id));
  }
}
