import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AgenciesService } from './agencies.service';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AgencyEntity } from './entities/agency.entity';

// @Roles(Role.ADMIN)
@ApiTags('admin/agencies')
@Controller('admin/agencies')
export class AgenciesController {
  constructor(private readonly agenciesService: AgenciesService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity })
  @Post()
  async create(@Body() createAgencyDto: CreateAgencyDto) {
    return new AgencyEntity(await this.agenciesService.create(createAgencyDto));
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity, isArray: true })
  async findAll() {
    const users = await this.agenciesService.findAll();
    return users.map((item) => new AgencyEntity(item));
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity })
  async findOne(@Param('id') id: string) {
    return new AgencyEntity(await this.agenciesService.findOne(id));
  }

  @Put(':id')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity })
  async update(
    @Param('id') id: string,
    @Body() updateAgencyDto: UpdateAgencyDto
  ) {
    return new AgencyEntity(
      await this.agenciesService.update(id, updateAgencyDto)
    );
  }

  @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AgencyEntity })
  async remove(@Param('id') id: string) {
    return new AgencyEntity(await this.agenciesService.remove(id));
  }
}
