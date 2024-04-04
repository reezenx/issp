import { Injectable } from '@nestjs/common';
import { CreateBudgetResourceDto } from './dto/create-budget-resource.dto';
import { UpdateBudgetResourceDto } from './dto/update-budget-resource.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BudgetResourcesService {
  constructor(private prisma: PrismaService) {}

  create(createBudgetResourceDto: CreateBudgetResourceDto) {
    return this.prisma.budgetSource.create({
      data: createBudgetResourceDto,
    });
  }

  findAll() {
    return this.prisma.budgetSource.findMany();
  }

  findOne(id: string) {
    return this.prisma.budgetSource.findUnique({ where: { id } });
  }

  update(id: string, updateBudgetResourceDto: UpdateBudgetResourceDto) {
    return this.prisma.budgetSource.update({
      where: { id },
      data: updateBudgetResourceDto,
    });
  }

  remove(id: string) {
    return this.prisma.budgetSource.delete({ where: { id } });
  }
}
