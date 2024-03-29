import { PrismaClient } from '@prisma/client';
import { CATEGORY } from '../data/data';
import { upsertItems } from './helper.create';

export async function createCategories(prisma: PrismaClient) {
  upsertItems(prisma, 'category', CATEGORY);
}
