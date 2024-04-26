import { Injectable } from '@nestjs/common';
import { CreateP1OrgProfileS2Dto } from './dto/create-p1-org-profile-s2.dto';
import { UpdateP1OrgProfileS2Dto } from './dto/update-p1-org-profile-s2.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class P1OrgProfileS2Service {
  constructor(private prisma: PrismaService) {}
  create(createP1OrgProfileS2Dto: CreateP1OrgProfileS2Dto, user: User) {
    const { isspId, ...p1OrgProfileS2Data } = createP1OrgProfileS2Dto;
    return this.prisma.iSSPP1OrgProfileS2.create({
      data: {
        ...p1OrgProfileS2Data,
        createdBy: `${user.firstName} ${user.lastName}`,
        issp: { connect: { id: isspId } },
      },
    });
  }

  findAll() {
    return this.prisma.iSSPP1OrgProfileS2.findMany({
      include: {
        issp: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.iSSPP1OrgProfileS2.findUnique({
      where: { id },
      include: {
        issp: true,
      },
    });
  }

  update(
    id: string,
    updateP1OrgProfileS2Dto: UpdateP1OrgProfileS2Dto,
    user: User
  ) {
    return this.prisma.iSSPP1OrgProfileS2.update({
      where: { id },
      data: {
        ...updateP1OrgProfileS2Dto,
        updatedBy: `${user.firstName} ${user.lastName}`,
      },
    });
  }

  remove(id: string) {
    return this.prisma.iSSPP1OrgProfileS2.delete({ where: { id } });
  }
}
