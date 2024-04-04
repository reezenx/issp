import { PrismaClient } from '@prisma/client';
import { CATEGORY } from '../data/data';
import { findDuplicates, upsertItems } from './helper.create';

export async function createCategories(prisma: PrismaClient) {
  findDuplicates(CATEGORY);

  upsertItems(prisma, 'category', CATEGORY);
}
