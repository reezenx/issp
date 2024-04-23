import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    return this.prisma.department.create({
      data: createDepartmentDto,
    });
  }

  findAll() {
    return this.prisma.department.findMany();
  }

  findAllDropdown() {
    return this.prisma.department.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
    });
  }

  async isCodeExist(code: string) {
    const r = await this.prisma.department.findFirst({
      where: { code },
      select: { code: true },
    });
    return Boolean(r);
  }

  async isUACSExist(uacs: string) {
    const u = await this.prisma.department.findFirst({
      where: { uacs },
      select: { uacs: true },
    });
    return Boolean(u);
  }

  findOne(id: string) {
    return this.prisma.department.findUnique({ where: { id } });
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return this.prisma.department.update({
      where: { id },
      data: updateDepartmentDto,
    });
  }

  remove(id: string) {
    return this.prisma.department.delete({ where: { id } });
  }
}
