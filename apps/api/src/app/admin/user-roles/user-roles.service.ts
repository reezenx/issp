import { Injectable } from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { PrismaService } from 'nestjs-prisma';
import { User } from '@prisma/client';

export const roundsOfHashing = 10;

@Injectable()
export class UserRolesService {
  constructor(private prisma: PrismaService) {}

  async create(createUserRoleDto: CreateUserRoleDto, user: User) {
    const { permissionIds, ...userRoleData } = createUserRoleDto;
    const permissionObjIds = permissionIds.map((id) => ({ id }));

    return this.prisma.userRole.create({
      data: {
        ...userRoleData,
        createdBy: `${user.firstName} ${user.lastName}`,
        permissions: { connect: permissionObjIds },
      },
    });
  }

  findAll() {
    return this.prisma.userRole.findMany();
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
    return this.prisma.userRole.findUnique({
      where: { id },
      include: {
        permissions: {
          select: {
            id: true,
            action: true,
            subject: true,
          },
        },
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserRoleDto, user: User) {
    const { permissionIds, ...userRoleData } = updateUserDto;
    const permissionObjIds = permissionIds.map((id) => ({ id }));

    return this.prisma.userRole.update({
      where: { id },
      data: {
        ...userRoleData,
        permissions: { connect: permissionObjIds },
        updatedBy: `${user.firstName} ${user.lastName}`,
      },
    });
  }

  remove(id: string) {
    return this.prisma.userRole.delete({ where: { id } });
  }
}
