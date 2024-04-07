import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'nestjs-prisma';
import { User } from '@prisma/client';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto, user: User) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing
    );
    createUserDto.password = hashedPassword;
    const { agencyId, roleId, ...userData } = createUserDto;

    return this.prisma.user.create({
      data: {
        ...userData,
        createdBy: `${user.firstName} ${user.lastName}`,
        agency: { connect: { id: agencyId } },
        role: { connect: { id: roleId } },
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        agency: {
          select: {
            name: true,
          },
        },
        role: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        agency: {
          select: {
            name: true,
          },
        },
        role: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async isEmailExist(email: string) {
    const r = await this.prisma.user.findFirst({
      where: { email },
      select: { email: true },
    });
    return Boolean(r);
  }

  async update(id: string, updateUserDto: UpdateUserDto, user: User) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundsOfHashing
      );
    }
    return this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        updatedBy: `${user.firstName} ${user.lastName}`,
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
