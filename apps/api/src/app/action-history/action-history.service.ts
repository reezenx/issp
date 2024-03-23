import { Injectable } from '@nestjs/common';
import { CreateActionHistoryDto } from './dto/create-action-history.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ActionHistoryService {
  constructor(private prisma: PrismaService) {}
  create(createActionHistoryDto: CreateActionHistoryDto) {
    return this.prisma.action_History.create({ data: createActionHistoryDto });
  }

  findAll(id: string) {
    return this.prisma.action_History.findMany({
      where: {
        isspId: id,
      },
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

  findOne(id: string) {
    return this.prisma.action_History.findUnique({
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
