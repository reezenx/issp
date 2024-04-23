import { Injectable } from '@nestjs/common';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectCategoryDto } from './dto/update-project-category.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProjectCategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createProjectCategoryDto: CreateProjectCategoryDto) {
    return this.prisma.projectCategory.create({
      data: createProjectCategoryDto,
    });
  }

  findAll() {
    return this.prisma.projectCategory.findMany();
  }

  findAllDropdown() {
    return this.prisma.projectCategory.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
    });
  }

  async isCodeExist(code: string) {
    const r = await this.prisma.projectCategory.findFirst({
      where: { code },
      select: { code: true },
    });
    return Boolean(r);
  }

  findOne(id: string) {
    return this.prisma.projectCategory.findUnique({ where: { id } });
  }

  update(id: string, updateProjectCategoryDto: UpdateProjectCategoryDto) {
    return this.prisma.projectCategory.update({
      where: { id },
      data: updateProjectCategoryDto,
    });
  }

  remove(id: string) {
    return this.prisma.projectCategory.delete({ where: { id } });
  }
}
