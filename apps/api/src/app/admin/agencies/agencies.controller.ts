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
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { ItemEntityDropdown } from '../../shared/models/item-dropdown.entity';

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

  @checkAbilities({ action: 'create', subject: 'Agency' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity, isArray: true })
  @Get()
  async findAll() {
    const items = await this.agenciesService.findAll();
    return items.map((item) => new AgencyEntity(item));
  }

  @checkAbilities({ action: 'read', subject: 'Agency' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ItemEntityDropdown, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.agenciesService.findAllDropdown();
    return items.map((item) => new ItemEntityDropdown(item));
  }

  @checkAbilities({ action: 'read', subject: 'Agency' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new AgencyEntity(await this.agenciesService.findOne(id));
  }

  @checkAbilities({ action: 'read', subject: 'Agency' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Get('exists/:email')
  async isEmailExist(@Param('email') email: string) {
    const data = await this.agenciesService.isEmailExist(email);
    return data;
  }

  @checkAbilities({ action: 'update', subject: 'Agency' })
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

  @checkAbilities({ action: 'delete', subject: 'Agency' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new AgencyEntity(await this.agenciesService.remove(id));
  }
}
