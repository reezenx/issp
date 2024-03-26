import { PrismaClient } from '@prisma/client';

export async function deleteAllData(prisma: PrismaClient) {
  await prisma.action_History.deleteMany({});
  await prisma.agency.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.iSSP.deleteMany({});
  await prisma.user.deleteMany({});
}
