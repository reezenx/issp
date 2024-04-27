import { Injectable } from '@nestjs/common';
import { CreateIsspDto } from './dto/create-issp.dto';
import { UpdateIsspDto } from './dto/update-issp.dto';
import { PrismaService } from 'nestjs-prisma';
import { User } from '@prisma/client';

@Injectable()
export class IsspService {
  constructor(private prisma: PrismaService) {}
  create(createIsspDto: CreateIsspDto, user: User) {
    return this.prisma.iSSP.create({
      data: {
        ...createIsspDto,
        createdBy: `${user.firstName} ${user.lastName}`,
      },
    });
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

  findAllDropdown() {
    return this.prisma.iSSP.findMany({
      select: {
        id: true,
        title: true,
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
        p1OrgProfileS1: {
          select: {
            id: true,
            a1MandateFunctions: true,
            a1MandateLegal: true,
            a2Vision: true,
            a3Mission: true,
            a4FinalOutputs: true,
            readOnly: true,
          },
        },
        p1OrgProfileS2: {
          select: {
            id: true,
            b1PlannerName: true,
            b1PlantillaPosition: true,
            b1OrgUnit: true,
            b1Email: true,
            b1Contacts: true,
            b2AnnualICTBudget: true,
            b2OtherSources: true,
            b3TotalNoEmp: true,
            b3NoRegionalOffices: true,
            b3NoProvOffices: true,
            b3NoOthersOffices: true,
          },
        },
      },
    });
  }

  update(id: string, updateIsspDto: UpdateIsspDto, user: User) {
    return this.prisma.iSSP.update({
      where: { id },
      data: {
        ...updateIsspDto,
        updatedBy: `${user.firstName} ${user.lastName}`,
      },
    });
  }

  remove(id: string) {
    return this.prisma.iSSP.delete({ where: { id } });
  }
}
