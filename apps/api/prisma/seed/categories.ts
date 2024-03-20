import { Category, PrismaClient } from '@prisma/client';
import { CATEGORIES } from './constant';
import { DateTime } from 'luxon';

export async function createCategories(prisma: PrismaClient) {
  const baseCategories: Category[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(CATEGORIES).forEach(([key, { id, name, code }]) => {
    baseCategories.push({
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
    data: baseCategories,
  });
}
