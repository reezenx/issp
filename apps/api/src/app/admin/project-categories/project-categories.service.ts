import { Injectable } from '@nestjs/common';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectTypeDto } from './dto/update-project-type.dto';
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

  findOne(id: string) {
    return this.prisma.projectCategory.findUnique({ where: { id } });
  }

  update(id: string, updateProjectTypeDto: UpdateProjectTypeDto) {
    return this.prisma.projectCategory.update({
      where: { id },
      data: updateProjectTypeDto,
    });
  }

  remove(id: string) {
    return this.prisma.projectCategory.delete({ where: { id } });
  }
}
