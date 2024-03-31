import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ActionHistoryService } from './action-history.service';
import { CreateActionHistoryDto } from './dto/create-action-history.dto';
import { ApiTags, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ActionHistoryEntity } from './entities/action-history.entity';

@ApiTags('user/action-history')
@Controller('user/action-history')
export class ActionHistoryController {
  constructor(private readonly actionHistoryService: ActionHistoryService) {}

  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ActionHistoryEntity })
  @Post()
  async create(@Body() createActionHistoryDto: CreateActionHistoryDto) {
    return new ActionHistoryEntity(
      await this.actionHistoryService.create(createActionHistoryDto)
    );
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ActionHistoryEntity, isArray: true })
  @Get(':id')
  async findAll(@Param('id') id: string) {
    const actionHistory = await this.actionHistoryService.findAll(id);
    return actionHistory.map((history) => new ActionHistoryEntity(history));
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ActionHistoryEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actionHistoryService.findOne(id);
  }
}
