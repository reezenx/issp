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
import { BudgetResourcesService } from './budget-resources.service';
import { CreateBudgetResourceDto } from './dto/create-budget-resource.dto';
import { UpdateBudgetResourceDto } from './dto/update-budget-resource.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { BudgetResourceEntity } from './entities/budget-resource.entity';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';

@ApiTags('admin/budget-types')
@Controller('budget-resources')
export class BudgetResourcesController {
  constructor(
    private readonly budgetResourcesService: BudgetResourcesService
  ) {}

  @checkAbilities({ action: 'create', subject: 'BudgetSource' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetResourceEntity })
  @Post()
  async create(@Body() createBudgetResourceDto: CreateBudgetResourceDto) {
    return new BudgetResourceEntity(
      await this.budgetResourcesService.create(createBudgetResourceDto)
    );
  }

  @checkAbilities({ action: 'read', subject: 'BudgetSource' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetResourceEntity, isArray: true })
  @Get()
  async findAll() {
    const budgetResource = await this.budgetResourcesService.findAll();
    return budgetResource.map((item) => new BudgetResourceEntity(item));
  }

  @checkAbilities({ action: 'read', subject: 'BudgetSource' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetResourceEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new BudgetResourceEntity(
      await this.budgetResourcesService.findOne(id)
    );
  }

  @checkAbilities({ action: 'update', subject: 'BudgetSource' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetResourceEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdateBudgetResourceDto: UpdateBudgetResourceDto
  ) {
    return new BudgetResourceEntity(
      await this.budgetResourcesService.update(id, UpdateBudgetResourceDto)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'BudgetSource' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetResourceEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new BudgetResourceEntity(
      await this.budgetResourcesService.remove(id)
    );
  }
}
