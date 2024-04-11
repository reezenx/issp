import { Injectable } from '@nestjs/common';
import { CreateBudgetTypeDto } from './dto/create-budget-type.dto';
import { UpdateBudgetTypeDto } from './dto/update-budget-type.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BudgetTypesService {
  constructor(private prisma: PrismaService) {}

  create(createBudgetTypeDto: CreateBudgetTypeDto) {
    return this.prisma.budgetType.create({
      data: createBudgetTypeDto,
    });
  }

  findAll() {
    return this.prisma.budgetType.findMany();
  }

  findAllDropdown() {
    return this.prisma.budgetType.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.budgetType.findUnique({ where: { id } });
  }

  update(id: string, updateBudgetTypeDto: UpdateBudgetTypeDto) {
    return this.prisma.budgetType.update({
      where: { id },
      data: updateBudgetTypeDto,
    });
  }

  remove(id: string) {
    return this.prisma.budgetType.delete({ where: { id } });
  }
}
