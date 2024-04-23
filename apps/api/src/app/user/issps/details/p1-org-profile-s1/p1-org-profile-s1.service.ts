import { Injectable } from '@nestjs/common';
import { CreateP1OrgProfileS1Dto } from './dto/create-p1-org-profile-s1.dto';
import { UpdateP1OrgProfileS1Dto } from './dto/update-p1-org-profile-s1.dto';
import { PrismaService } from 'nestjs-prisma';
import { User } from '@prisma/client';

@Injectable()
export class P1OrgProfileS1Service {
  constructor(private prisma: PrismaService) {}
  create(createP1OrgProfileS1Dto: CreateP1OrgProfileS1Dto, user: User) {
    return this.prisma.iSSPP1OrgProfileS1.create({
      data: {
        ...createP1OrgProfileS1Dto,
        createdBy: `${user.firstName} ${user.lastName}`,
      },
    });
  }

  findAll() {
    return this.prisma.iSSPP1OrgProfileS1.findMany({
      include: {
        issp: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.iSSPP1OrgProfileS1.findUnique({
      where: { id },
      include: {
        issp: true,
      },
    });
  }

  update(
    id: string,
    updateP1OrgProfileS1Dto: UpdateP1OrgProfileS1Dto,
    user: User
  ) {
    return this.prisma.iSSPP1OrgProfileS1.update({
      where: { id },
      data: {
        ...updateP1OrgProfileS1Dto,
        updatedBy: `${user.firstName} ${user.lastName}`,
      },
    });
  }

  remove(id: string) {
    return this.prisma.iSSPP1OrgProfileS1.delete({ where: { id } });
  }
}
