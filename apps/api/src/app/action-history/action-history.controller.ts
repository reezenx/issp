import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ActionHistoryService } from './action-history.service';
import { CreateActionHistoryDto } from './dto/create-action-history.dto';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { ApiTags, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ActionHistoryEntity } from './entities/action-history.entity';
import { Action } from '@issp/common';

@ApiTags('action-history')
// @Roles(Role.PLANNER)
@Controller('action-history')
export class ActionHistoryController {
  constructor(private readonly actionHistoryService: ActionHistoryService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ActionHistoryEntity })
  async create(@Body() createActionHistoryDto: CreateActionHistoryDto) {
    return new ActionHistoryEntity(
      await this.actionHistoryService.create(createActionHistoryDto)
    );
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ActionHistoryEntity, isArray: true })
  async findAll(@Param('id') id: string) {
    const actionHistory = await this.actionHistoryService.findAll(id);
    return actionHistory.map((history) => new ActionHistoryEntity(history));
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ActionHistoryEntity })
  findOne(@Param('id') id: string) {
    return this.actionHistoryService.findOne(id);
  }
}
