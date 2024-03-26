import { Category, PrismaClient } from '@prisma/client';
import { CATEGORIES } from './dev-data';
import { DateTime } from 'luxon';

export async function createPermissions(prisma: PrismaClient) {
  const baseItems: Category[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(CATEGORIES).forEach(([key, { id, name, code }]) => {
    baseItems.push({
      id,
      name,
      code,
      createdAt: DateTime.now().toJSDate(),
      updatedAt: DateTime.now().toJSDate(),
      createdBy: 'System',
      updatedBy: 'System',
    });
  });

  await prisma.category.createMany({
    data: baseItems,
  });
}
