import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { CustomPrismaService } from 'nestjs-prisma';
import { PrismaClient } from '@prisma/client';
import { DB } from '@issp/shared/constant';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(
    @Inject(DB.PRISMA_SERVICE_MAIN)
    private prisma: CustomPrismaService<PrismaClient>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing
    );
    createUserDto.password = hashedPassword;
    return this.prisma.client.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.client.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.client.user.findUnique({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundsOfHashing
      );
    }
    return this.prisma.client.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.client.user.delete({ where: { id } });
  }
}
