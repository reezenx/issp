import { Module } from '@nestjs/common';
import { BudgetResourcesService } from './budget-resources.service';
import { BudgetResourcesController } from './budget-resources.controller';

@Module({
  controllers: [BudgetResourcesController],
  providers: [BudgetResourcesService],
})
export class BudgetResourcesModule {}
