import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'nestjs-prisma';
import { User } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  create(createProjectDto: CreateProjectDto, user: User) {
    const {
      agencyId,
      typeId,
      categoryId,
      budgetTypeId,
      budgetSourceId,
      implementationTypeId,
      ...projectData
    } = createProjectDto;
    return this.prisma.project.create({
      data: {
        ...projectData,
        createdBy: `${user.firstName} ${user.lastName}`,
        agency: { connect: { id: agencyId } },
        type: { connect: { id: typeId } },
        category: { connect: { id: categoryId } },
        budgetSource: { connect: { id: budgetTypeId } },
        budgetType: { connect: { id: budgetSourceId } },
        implementationType: { connect: { id: implementationTypeId } },
      },
    });
  }

  findAll() {
    return this.prisma.project.findMany({
      include: {
        agency: {
          select: {
            name: true,
          },
        },
        type: {
          select: {
            name: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
        budgetType: {
          select: {
            name: true,
          },
        },
        budgetSource: {
          select: {
            name: true,
          },
        },
        implementationType: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.project.findUnique({ where: { id } });
  }

  update(id: string, updateProjectDto: UpdateProjectDto, user: User) {
    return this.prisma.category.update({
      where: { id },
      data: {
        ...updateProjectDto,
        updatedBy: `${user.firstName} ${user.lastName}`,
      },
    });
  }

  remove(id: string) {
    return this.prisma.category.delete({ where: { id } });
  }
}
