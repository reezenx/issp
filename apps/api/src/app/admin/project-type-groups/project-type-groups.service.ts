import { Injectable } from '@nestjs/common';
import { CreateProjectTypeGroupDto } from './dto/create-project-type-group.dto';
import { UpdateProjectTypeGroupDto } from './dto/update-project-type-group.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProjectTypeGroupsService {
  constructor(private prisma: PrismaService) {}

  create(createProjectTypeGroupDto: CreateProjectTypeGroupDto) {
    return this.prisma.projectTypeGroup.create({
      data: createProjectTypeGroupDto,
    });
  }

  findAll() {
    return this.prisma.projectTypeGroup.findMany();
  }

  findAllDropdown() {
    return this.prisma.projectTypeGroup.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.projectTypeGroup.findUnique({ where: { id } });
  }

  async isCodeExist(code: string) {
    const r = await this.prisma.projectTypeGroup.findFirst({
      where: { code },
      select: { code: true },
    });
    return Boolean(r);
  }

  update(id: string, updateProjectTypeGroupDto: UpdateProjectTypeGroupDto) {
    return this.prisma.projectTypeGroup.update({
      where: { id },
      data: updateProjectTypeGroupDto,
    });
  }

  remove(id: string) {
    return this.prisma.projectTypeGroup.delete({ where: { id } });
  }
}
