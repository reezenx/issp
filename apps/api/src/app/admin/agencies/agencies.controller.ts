import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AgenciesService } from './agencies.service';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AgencyEntity } from './entities/agency.entity';
import { AgencyEntityDropdown } from './entities/agency-dropdown.entity';

// @Roles(Role.ADMIN)
@ApiTags('admin/agencies')
@Controller('admin/agencies')
export class AgenciesController {
  constructor(private readonly agenciesService: AgenciesService) {}

  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity })
  @Post()
  async create(@Body() createAgencyDto: CreateAgencyDto) {
    return new AgencyEntity(await this.agenciesService.create(createAgencyDto));
  }

  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity, isArray: true })
  @Get()
  async findAll() {
    const items = await this.agenciesService.findAll();
    return items.map((item) => new AgencyEntity(item));
  }

  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.agenciesService.findAllDropdown();
    return items.map((item) => new AgencyEntityDropdown(item));
  }

  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new AgencyEntity(await this.agenciesService.findOne(id));
  }

  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAgencyDto: UpdateAgencyDto
  ) {
    return new AgencyEntity(
      await this.agenciesService.update(id, updateAgencyDto)
    );
  }

  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new AgencyEntity(await this.agenciesService.remove(id));
  }
}
