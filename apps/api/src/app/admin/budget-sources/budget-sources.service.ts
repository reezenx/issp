import { Injectable } from '@nestjs/common';
import { CreateBudgetSourceDto } from './dto/create-budget-source.dto';
import { UpdateBudgetSourceDto } from './dto/update-budget-source.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BudgetSourcesService {
  constructor(private prisma: PrismaService) {}

  create(createBudgetSourceDto: CreateBudgetSourceDto) {
    return this.prisma.budgetSource.create({
      data: createBudgetSourceDto,
    });
  }

  findAll() {
    return this.prisma.budgetSource.findMany();
  }

  findOne(id: string) {
    return this.prisma.budgetSource.findUnique({ where: { id } });
  }

  update(id: string, updateBudgetSourceDto: UpdateBudgetSourceDto) {
    return this.prisma.budgetSource.update({
      where: { id },
      data: updateBudgetSourceDto,
    });
  }

  remove(id: string) {
    return this.prisma.budgetSource.delete({ where: { id } });
  }
}
