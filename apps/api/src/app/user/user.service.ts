import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { AuthEntity } from '../auth/entity/auth.entity';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        roles: true,
      },
    });
  }

  getUserRolesPermissionByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        roles: {
          select: {
            name: true,
            permissions: {
              select: {
                action: true,
                subject: true,
                conditions: true,
              },
            },
          },
        },
      },
    });
  }

  async validateUserByEmail(email: string) {
    const user = await this.getUserByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  getUserById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async validateUserById(id: string) {
    const user = await this.getUserById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
