import { Module } from '@nestjs/common';
import { BudgetTypesService } from './budget-types.service';
import { BudgetTypesController } from './budget-types.controller';

@Module({
  controllers: [BudgetTypesController],
  providers: [BudgetTypesService],
})
export class BudgetTypesModule {}
