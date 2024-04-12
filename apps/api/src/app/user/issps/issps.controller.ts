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
import { IsspService } from './issps.service';
import { CreateIsspDto } from './dto/create-issp.dto';
import { UpdateIsspDto } from './dto/update-issp.dto';
import { ApiTags, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { IsspEntity } from './entities/issp.entity';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { IsspEntityDropdown } from '../../shared/models/issp-dropdown.entity';
import { CurrentUser } from '@issp/api-auth';
import { User } from '@prisma/client';

@ApiTags('user/issps')
@Controller('user/issps')
export class IsspController {
  constructor(private readonly isspService: IsspService) {}

  @checkAbilities({ action: 'create', subject: 'ISSP' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity })
  @Post()
  async create(
    @Body() createIsspDto: CreateIsspDto,
    @CurrentUser() user: User
  ) {
    return new IsspEntity(await this.isspService.create(createIsspDto, user));
  }

  @checkAbilities({ action: 'read', subject: 'ISSP' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity, isArray: true })
  @Get()
  async findAll() {
    const issps = await this.isspService.findAll();
    return issps.map((issp) => new IsspEntity(issp));
  }

  @checkAbilities({ action: 'read', subject: 'ISSP' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntityDropdown, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.isspService.findAllDropdown();
    return items.map((item) => new IsspEntityDropdown(item));
  }

  @checkAbilities({ action: 'read', subject: 'ISSP' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new IsspEntity(await this.isspService.findOne(id));
  }

  @checkAbilities({ action: 'update', subject: 'ISSP' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateIsspDto: UpdateIsspDto,
    @CurrentUser() user: User
  ) {
    return new IsspEntity(
      await this.isspService.update(id, updateIsspDto, user)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'ISSP' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new IsspEntity(await this.isspService.remove(id));
  }
}
