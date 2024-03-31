import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AgenciesService } from './agencies.service';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AgencyEntity } from './entities/agency.entity';
import { AgencyEntityDropdown } from './entities/agency-dropdown.entity';
import { checkAbilities } from '../../auth/casl/abilities.decorator';
import { AbilitiesGuard } from '../../auth/casl/abilities.guard';

@ApiTags('admin/agencies')
@Controller('admin/agencies')
export class AgenciesController {
  constructor(private readonly agenciesService: AgenciesService) {}

  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity })
  @Post()
  async create(@Body() createAgencyDto: CreateAgencyDto) {
    return new AgencyEntity(await this.agenciesService.create(createAgencyDto));
  }

  @checkAbilities({ action: 'create', subject: 'agency' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity, isArray: true })
  @Get()
  async findAll() {
    const items = await this.agenciesService.findAll();
    return items.map((item) => new AgencyEntity(item));
  }

  @checkAbilities({ action: 'read', subject: 'agency' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.agenciesService.findAllDropdown();
    return items.map((item) => new AgencyEntityDropdown(item));
  }

  @checkAbilities({ action: 'read', subject: 'agency' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new AgencyEntity(await this.agenciesService.findOne(id));
  }

  @checkAbilities({ action: 'update', subject: 'agency' })
  @UseGuards(AbilitiesGuard)
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

  @checkAbilities({ action: 'delete', subject: 'agency' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new AgencyEntity(await this.agenciesService.remove(id));
  }
}
