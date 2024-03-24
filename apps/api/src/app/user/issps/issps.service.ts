import { Injectable } from '@nestjs/common';
import { CreateIsspDto } from './dto/create-issp.dto';
import { UpdateIsspDto } from './dto/update-issp.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class IsspService {
  constructor(private prisma: PrismaService) {}
  create(createIsspDto: CreateIsspDto) {
    return this.prisma.iSSP.create({ data: createIsspDto });
  }

  findAll() {
    return this.prisma.iSSP.findMany({
      include: {
        author: {
          select: {
            firstName: true,
            lastName: true,
            id: true,
          },
        },
        agency: {
          select: {
            name: true,
          },
        },
        users: {
          select: {
            firstName: true,
            lastName: true,
            id: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.iSSP.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            firstName: true,
            lastName: true,
            id: true,
          },
        },
        agency: {
          select: {
            name: true,
          },
        },
        users: {
          select: {
            firstName: true,
            lastName: true,
            id: true,
          },
        },
      },
    });
  }

  update(id: string, updateIsspDto: UpdateIsspDto) {
    return this.prisma.iSSP.update({
      where: { id },
      data: updateIsspDto,
    });
  }

  remove(id: string) {
    return this.prisma.iSSP.delete({ where: { id } });
  }
}
