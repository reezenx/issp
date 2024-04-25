import { Injectable } from '@nestjs/common';
import { CreateProjectImplTypeDto } from './dto/create-project-impl-type.dto';
import { UpdateProjectImplTypeDto } from './dto/update-project-impl-type.dto';
import { PrismaService } from 'nestjs-prisma';
import { UniqueValidatorOptionsQuery } from '../../shared/models/unique-validator-options.query';
// import { IsKeyUniqueValidatorOptions } from '@issp/common';

@Injectable()
export class ProjectImplTypesService {
  constructor(private prisma: PrismaService) {}

  create(createProjectImplTypeDto: CreateProjectImplTypeDto) {
    return this.prisma.projectImplementationType.create({
      data: createProjectImplTypeDto,
    });
  }

  findAll() {
    return this.prisma.projectImplementationType.findMany();
  }

  findAllDropdown() {
    return this.prisma.projectImplementationType.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
    });
  }

  async isCodeExist(code: string, query: UniqueValidatorOptionsQuery) {
    const r = await this.prisma.projectImplementationType.findFirst({
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
    return this.prisma.projectImplementationType.findUnique({ where: { id } });
  }

  update(id: string, updateProjectImplTypeDto: UpdateProjectImplTypeDto) {
    return this.prisma.projectImplementationType.update({
      where: { id },
      data: updateProjectImplTypeDto,
    });
  }

  remove(id: string) {
    return this.prisma.projectImplementationType.delete({ where: { id } });
  }
}
