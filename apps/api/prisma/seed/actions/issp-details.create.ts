import { PrismaClient } from '@prisma/client';
import { ISSPP1OrgProfileS1 } from '../data/issp';

export async function createISSPDetails(prisma: PrismaClient) {
  await prisma.iSSPP1OrgProfileS1.deleteMany();
  createISSPP1OrgProfileS1(prisma);
}

export async function createISSPP1OrgProfileS1(prisma: PrismaClient) {
  const data: any = [];
  Object.entries(ISSPP1OrgProfileS1).forEach(
    async ([
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      key,
      {
        id,
        a1MandateFunctions,
        a1MandateLegal,
        a2Vision,
        a3Mission,
        a4FinalOutputs,
        issp,
      },
    ]) => {
      const tags = ['new'];
      const item = {
        id,
        a1MandateFunctions,
        a1MandateLegal,
        a2Vision,
        a3Mission,
        a4FinalOutputs,
        createdAt: new Date(),
        createdBy: 'System',
        readOnly: false,
        tags,
        isspId: issp.id,
      };
      data.push(item);
    }
  );
  const create = prisma.iSSPP1OrgProfileS1.createMany({
    data,
  });

  const updates: any[] = [];
  Object.entries(ISSPP1OrgProfileS1).forEach(
    async ([
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      key,
      { id, issp },
    ]) => {
      const update = prisma.iSSPP1OrgProfileS1.update({
        where: { id },
        data: {
          issp: {
            connect: {
              id: issp.id,
            },
          },
        },
      });
      updates.push(update);
    }
  );
  await prisma.$transaction([create, ...updates]);
}
