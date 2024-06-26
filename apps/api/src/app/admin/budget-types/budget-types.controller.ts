import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Query,
} from '@nestjs/common';
import { BudgetTypesService } from './budget-types.service';
import { CreateBudgetTypeDto } from './dto/create-budget-type.dto';
import { UpdateBudgetTypeDto } from './dto/update-budget-type.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { BudgetTypeEntity } from './entities/budget-type.entity';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { ItemEntityDropdown } from '../../shared/models/item-dropdown.entity';
import { UniqueValidatorOptionsQuery } from '../../shared/models/unique-validator-options.query';

@ApiTags('admin/budget-types')
@Controller('admin/budget-types')
export class BudgetTypesController {
  constructor(private readonly budgetTypesService: BudgetTypesService) {}

  @checkAbilities({ action: 'create', subject: 'BudgetType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetTypeEntity })
  @Post()
  async create(@Body() createBudgetTypeDto: CreateBudgetTypeDto) {
    return new BudgetTypeEntity(
      await this.budgetTypesService.create(createBudgetTypeDto)
    );
  }

  @checkAbilities({ action: 'read', subject: 'BudgetType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetTypeEntity, isArray: true })
  @Get()
  async findAll() {
    const budgetTypes = await this.budgetTypesService.findAll();
    return budgetTypes.map((item) => new BudgetTypeEntity(item));
  }

  @checkAbilities({ action: 'read', subject: 'BudgetType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ItemEntityDropdown, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.budgetTypesService.findAllDropdown();
    return items.map((item) => new ItemEntityDropdown(item));
  }

  @checkAbilities({ action: 'read', subject: 'BudgetType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetTypeEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new BudgetTypeEntity(await this.budgetTypesService.findOne(id));
  }

  @checkAbilities({ action: 'read', subject: 'BudgetType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Get('exists/:code')
  async isCodeExist(
    @Param('code') code: string,
    @Query() query: UniqueValidatorOptionsQuery
  ) {
    const data = await this.budgetTypesService.isCodeExist(code, query);
    return data;
  }

  @checkAbilities({ action: 'update', subject: 'BudgetType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetTypeEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdateBudgetTypeDto: UpdateBudgetTypeDto
  ) {
    return new BudgetTypeEntity(
      await this.budgetTypesService.update(id, UpdateBudgetTypeDto)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'BudgetType' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetTypeEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new BudgetTypeEntity(await this.budgetTypesService.remove(id));
  }
}
