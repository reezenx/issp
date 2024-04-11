import { Injectable } from '@nestjs/common';
import { CreateProjectTypeDto } from './dto/create-project-type.dto';
import { UpdateProjectTypeDto } from './dto/update-project-type.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProjectTypesService {
  constructor(private prisma: PrismaService) {}

  create(createProjectTypeDto: CreateProjectTypeDto) {
    return this.prisma.projectType.create({
      data: createProjectTypeDto,
    });
  }

  findAll() {
    return this.prisma.projectType.findMany({
      include: {
        projectTypeGroup: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findAllDropdown() {
    return this.prisma.projectType.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.projectType.findUnique({ where: { id } });
  }

  update(id: string, updateProjectTypeDto: UpdateProjectTypeDto) {
    return this.prisma.projectType.update({
      where: { id },
      data: updateProjectTypeDto,
    });
  }

  remove(id: string) {
    return this.prisma.projectType.delete({ where: { id } });
  }
}
