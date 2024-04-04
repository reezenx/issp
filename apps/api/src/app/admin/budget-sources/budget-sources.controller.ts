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
import { BudgetSourcesService } from './budget-sources.service';
import { CreateBudgetSourceDto } from './dto/create-budget-source.dto';
import { UpdateBudgetSourceDto } from './dto/update-budget-source.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { BudgetSourceEntity } from './entities/budget-source.entity';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';

@ApiTags('admin/budget-types')
@Controller('budget-sources')
export class BudgetSourcesController {
  constructor(private readonly budgetSourcesService: BudgetSourcesService) {}

  @checkAbilities({ action: 'create', subject: 'BudgetSource' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetSourceEntity })
  @Post()
  async create(@Body() createBudgetSourceDto: CreateBudgetSourceDto) {
    return new BudgetSourceEntity(
      await this.budgetSourcesService.create(createBudgetSourceDto)
    );
  }

  @checkAbilities({ action: 'read', subject: 'BudgetSource' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetSourceEntity, isArray: true })
  @Get()
  async findAll() {
    const budgetTypes = await this.budgetSourcesService.findAll();
    return budgetTypes.map((item) => new BudgetSourceEntity(item));
  }

  @checkAbilities({ action: 'update', subject: 'BudgetSource' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetSourceEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdateBudgetTypeDto: UpdateBudgetSourceDto
  ) {
    return new BudgetSourceEntity(
      await this.budgetSourcesService.update(id, UpdateBudgetTypeDto)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'BudgetSource' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BudgetSourceEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new BudgetSourceEntity(await this.budgetSourcesService.remove(id));
  }
}
