import { Injectable } from '@nestjs/common';
import { CreateActionHistoryDto } from './dto/create-action-history.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ActionHistoryService {
  constructor(private prisma: PrismaService) {}
  create(createActionHistoryDto: CreateActionHistoryDto) {
    return this.prisma.actionHistory.create({ data: createActionHistoryDto });
  }

  findAll(id: string) {
    return this.prisma.actionHistory.findMany({
      where: {
        isspId: id,
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            roles: true,
            id: true,
          },
        },
        issp: {
          select: {
            title: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.actionHistory.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            role: true,
            id: true,
          },
        },
        issp: {
          select: {
            title: true,
          },
        },
      },
    });
  }
}
