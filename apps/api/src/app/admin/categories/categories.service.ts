import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'nestjs-prisma';
import { UniqueValidatorOptionsQuery } from '../../shared/models/unique-validator-options.query';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: createCategoryDto,
    });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findAllDropdown() {
    return this.prisma.category.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
    });
  }

  async isCodeExist(code: string, query: UniqueValidatorOptionsQuery) {
    const r = await this.prisma.category.findFirst({
      where: {
        code,
        id: {
          not: query.ignoreId,
        },
      },
      select: { code: true },
    });
    return Boolean(r);
  }

  findOne(id: string) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  remove(id: string) {
    return this.prisma.category.delete({ where: { id } });
  }
}
