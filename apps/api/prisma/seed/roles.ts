import { PrismaClient, User_Role } from '@prisma/client';
import { ROLES } from './dev-data';
import { DateTime } from 'luxon';

export async function createUserRoles(prisma: PrismaClient) {
  const baseItems: User_Role[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(ROLES).forEach(([key, { id, name }]) => {
    baseItems.push({
      id,
      name,
      createdAt: DateTime.now().toJSDate(),
      updatedAt: DateTime.now().toJSDate(),
      createdBy: 'System',
      updatedBy: 'System',
    });
  });

  await prisma.user_Role.createMany({
    data: baseItems,
  });
}
