import { Injectable } from '@nestjs/common';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { PrismaService } from 'nestjs-prisma';
import { UniqueValidatorOptionsQuery } from '../../shared/models/unique-validator-options.query';

@Injectable()
export class AgenciesService {
  constructor(private prisma: PrismaService) {}

  create(createAgencyDto: CreateAgencyDto) {
    const { categoryId, ...agencyData } = createAgencyDto;
    return this.prisma.agency.create({
      data: {
        ...agencyData,
        category: { connect: { id: categoryId } },
      },
    });
  }

  findAll() {
    return this.prisma.agency.findMany({
      include: {
        category: { select: { name: true } },
        department: { select: { name: true } },
      },
    });
  }

  findAllDropdown() {
    return this.prisma.agency.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.agency.findUnique({ where: { id } });
  }

  async isCodeExist(code: string, query: UniqueValidatorOptionsQuery) {
    const r = await this.prisma.agency.findFirst({
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

  async isEmailExist(email: string) {
    const r = await this.prisma.agency.findFirst({
      where: { email },
      select: { email: true },
    });
    return Boolean(r);
  }

  update(id: string, updateAgencyDto: UpdateAgencyDto) {
    return this.prisma.agency.update({
      where: { id },
      data: updateAgencyDto,
    });
  }

  remove(id: string) {
    return this.prisma.agency.delete({ where: { id } });
  }
}
