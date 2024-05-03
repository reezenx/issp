import { PrismaClient } from '@prisma/client';
import { ISSPP1OrgProfileS1, ISSPP1OrgProfileS2 } from '../data/issp-details';

export async function createISSPDetails(prisma: PrismaClient) {
  await prisma.iSSPP1OrgProfileS1.deleteMany();
  await prisma.iSSPP1OrgProfileS2.deleteMany();

  // PART I. ORGANIZATIONAL PROFILE (P1)
  createISSPP1OrgProfileS1(prisma);
  createISSPP1OrgProfileS2(prisma);
}

export async function createISSPP1OrgProfileS1(prisma: PrismaClient) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export async function createISSPP1OrgProfileS2(prisma: PrismaClient) {
  const data: any = [];
  Object.entries(ISSPP1OrgProfileS2).forEach(
    async ([
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      key,
      {
        id,
        b1AgencyHeadName,
        b1PlannerName,
        b1PlantillaPosition,
        b1OrgUnit,
        b1Email,
        b1Contacts,
        b2AnnualICTBudget,
        b2OtherSources,
        b3TotalNoEmp,
        b3NoRegionalOffices,
        b3NoProvOffices,
        b3NoOthersOffices,
        issp,
      },
    ]) => {
      const tags = ['new'];
      const item = {
        id,
        b1AgencyHeadName,
        b1PlannerName,
        b1PlantillaPosition,
        b1OrgUnit,
        b1Email,
        b1Contacts,
        b2AnnualICTBudget,
        b2OtherSources,
        b3TotalNoEmp,
        b3NoRegionalOffices,
        b3NoProvOffices,
        b3NoOthersOffices,
        createdAt: new Date(),
        createdBy: 'System',
        readOnly: false,
        tags,
        isspId: issp.id,
      };
      data.push(item);
    }
  );
  const create = prisma.iSSPP1OrgProfileS2.createMany({
    data,
  });

  const updates: any[] = [];
  Object.entries(ISSPP1OrgProfileS1).forEach(
    async ([
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      key,
      { id, issp },
    ]) => {
      const update = prisma.iSSPP1OrgProfileS2.update({
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
