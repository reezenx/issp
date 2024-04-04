import { Module } from '@nestjs/common';
import { BudgetSourcesService } from './budget-sources.service';
import { BudgetSourcesController } from './budget-sources.controller';

@Module({
  controllers: [BudgetSourcesController],
  providers: [BudgetSourcesService],
})
export class BudgetSourcesModule {}
