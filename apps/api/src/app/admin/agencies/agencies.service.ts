import { Injectable } from '@nestjs/common';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { PrismaService } from 'nestjs-prisma';

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
      include: { category: {  select: { name: true } } },
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
