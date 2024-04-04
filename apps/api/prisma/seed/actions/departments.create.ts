import { Department, PrismaClient, Status } from '@prisma/client';
import { DEPARTMENT } from '../data/data';

export const DEPARTMENTS: {
  [key: string]: Pick<Department, 'id' | 'name' | 'code' | 'uacs'>;
} = {
  DICT: {
    ...DEPARTMENT.DICT,
  },
  DILG: {
    ...DEPARTMENT.DILG,
  },
  DAR: {
    ...DEPARTMENT.DAR,
  },
  DA: {
    ...DEPARTMENT.DA,
  },
  DBM: {
    ...DEPARTMENT.DBM,
  },
  DE: {
    ...DEPARTMENT.DE,
  },
};

export async function createDepartments(prisma: PrismaClient) {
  Object.entries(DEPARTMENTS).forEach(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async ([key, { id, name, code, uacs }]) => {
      const item = {
        id,
        name,
        code,
        uacs,
        createdAt: new Date(),
        createdBy: 'System',
        status: Status.ACTIVE,
      };

      await prisma.department.upsert({
        where: { code },
        update: {
          name,
          code,
          uacs,
        },
        create: {
          ...item,
        },
      });
    }
  );
}
