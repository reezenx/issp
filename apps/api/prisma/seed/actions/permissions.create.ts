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
  READ_USER: {
    ...PERMISSION.READ_USER,
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
  READ_ISSP: {
    ...PERMISSION.READ_ISSP,
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
    role: ROLE.ADMIN,
  },
  READ_PROJECT: {
    ...PERMISSION.READ_PROJECT,
    role: ROLE.PLANNER,
  },
  UPDATE_PROJECT: {
    ...PERMISSION.UPDATE_PROJECT,
    role: ROLE.ADMIN,
  },
  DELETE_PROJECT: {
    ...PERMISSION.DELETE_PROJECT,
    role: ROLE.SUPER_ADMIN,
  },
  MANAGE_CATEGORY: {
    ...PERMISSION.MANAGE_CATEGORY,
    role: ROLE.SUPER_ADMIN,
  },
  CREATE_CATEGORY: {
    ...PERMISSION.CREATE_CATEGORY,
    role: ROLE.ADMIN,
  },
  READ_CATEGORY: {
    ...PERMISSION.READ_CATEGORY,
    role: ROLE.ADMIN,
  },
  UPDATE_CATEGORY: {
    ...PERMISSION.UPDATE_CATEGORY,
    role: ROLE.ADMIN,
  },
  DELETE_CATEGORY: {
    ...PERMISSION.DELETE_CATEGORY,
    role: ROLE.SUPER_ADMIN,
  },
  MANAGE_AGENCY: {
    ...PERMISSION.MANAGE_AGENCY,
    role: ROLE.SUPER_ADMIN,
  },
  CREATE_AGENCY: {
    ...PERMISSION.CREATE_AGENCY,
    role: ROLE.ADMIN,
  },
  READ_AGENCY: {
    ...PERMISSION.READ_AGENCY,
    role: ROLE.ADMIN,
  },
  UPDATE_AGENCY: {
    ...PERMISSION.UPDATE_AGENCY,
    role: ROLE.ADMIN,
  },
  DELETE_AGENCY: {
    ...PERMISSION.DELETE_AGENCY,
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
