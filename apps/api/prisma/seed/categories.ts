import { Category, PrismaClient } from '@prisma/client';
import { CATEGORIES } from './constant';
import { DateTime } from 'luxon';

export async function createCategories(prisma: PrismaClient) {
  const baseCategories: Category[] = [];

  Object.entries(CATEGORIES).forEach(([key, value]) => {
    baseCategories.push({
      id: value.id,
      name: value.name,
      code: value.code,
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
