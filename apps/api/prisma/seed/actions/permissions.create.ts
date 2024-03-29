import { Permission, PrismaClient, Role, UserRole } from '@prisma/client';
import { PERMISSION, ROLE } from '../data/data';

export const PERMISSIONS: Record<
  Role | string,
  Pick<Permission, 'id' | 'action' | 'subject'> & {
    role: Pick<UserRole, 'id' | 'name'>;
  }
> = {
  MANAGE_ALL: {
    ...PERMISSION.MANAGE_ALL,
    role: ROLE.SUPER_ADMIN,
  },
  MANAGE_USER: {
    ...PERMISSION.MANAGE_USER,
    role: ROLE.SUPER_ADMIN,
  },
  CREATE_USER: {
    ...PERMISSION.CREATE_USER,
    role: ROLE.ADMIN,
  },
  UPDATE_USER: {
    ...PERMISSION.UPDATE_USER,
    role: ROLE.ADMIN,
  },
  DELETE_USER: {
    ...PERMISSION.DELETE_USER,
    role: ROLE.SUPER_ADMIN,
  },
  MANAGE_ISSP: {
    ...PERMISSION.MANAGE_ISSP,
    role: ROLE.SUPER_ADMIN,
  },
  CREATE_ISSP: {
    ...PERMISSION.CREATE_ISSP,
    role: ROLE.PLANNER,
  },
  UPDATE_ISSP: {
    ...PERMISSION.UPDATE_ISSP,
    role: ROLE.PLANNER,
  },
  DELETE_ISSP: {
    ...PERMISSION.DELETE_ISSP,
    role: ROLE.SUPER_ADMIN,
  },
  MANAGE_PROJECT: {
    ...PERMISSION.MANAGE_PROJECT,
    role: ROLE.SUPER_ADMIN,
  },
  CREATE_PROJECT: {
    ...PERMISSION.CREATE_PROJECT,
    role: ROLE.SUPER_ADMIN,
  },
  UPDATE_PROJECT: {
    ...PERMISSION.UPDATE_PROJECT,
    role: ROLE.ADMIN,
  },
  DELETE_PROJECT: {
    ...PERMISSION.DELETE_PROJECT,
    role: ROLE.SUPER_ADMIN,
  },
};

export async function createPermissions(prisma: PrismaClient) {
  Object.entries(PERMISSIONS).forEach(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async ([key, { id, role, action, subject }]) => {
      const item = {
        id,
        action,
        subject,
        createdAt: new Date(),
        createdBy: 'System',
      };
      await prisma.permission.upsert({
        where: { id },
        update: {
          action,
          subject,
        },
        create: {
          ...item,
          role: {
            connectOrCreate: {
              where: {
                id: role.id,
              },
              create: {
                ...role,
                createdBy: 'System',
              },
            },
          },
        },
      });
    }
  );
}
