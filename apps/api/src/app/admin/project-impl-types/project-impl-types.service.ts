import { Injectable } from '@nestjs/common';
import { CreateProjectImplTypeDto } from './dto/create-project-impl-type.dto';
import { UpdateProjectImplTypeDto } from './dto/update-project-impl-type.dto';
import { PrismaService } from 'nestjs-prisma';

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
