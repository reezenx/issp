import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permissions.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PrismaService } from 'nestjs-prisma';
import { User } from '@prisma/client';

@Injectable()
export class PermissionsService {
  constructor(private prisma: PrismaService) {}

  create(createPermissionDto: CreatePermissionDto, user: User) {
    return this.prisma.permission.create({
      data: {
        ...createPermissionDto,
        createdBy: `${user.firstName} ${user.lastName}`,
      },
    });
  }

  connectToRole(roleId: string, id: string) {
    return this.prisma.permission.update({
      where: { id },
      data: {
        role: { connect: { id: roleId } },
      },
    });
  }

  findAll() {
    return this.prisma.permission.findMany({
      include: {
        role: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findAllDropdown() {
    return this.prisma.userRole.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.permission.findUnique({ where: { id } });
  }

  update(id: string, updatePermissionDto: UpdatePermissionDto, user: User) {
    return this.prisma.permission.update({
      where: { id },
      data: {
        ...updatePermissionDto,
        updatedBy: `${user.firstName} ${user.lastName}`,
      },
    });
  }

  remove(id: string) {
    return this.prisma.permission.delete({ where: { id } });
  }
}
