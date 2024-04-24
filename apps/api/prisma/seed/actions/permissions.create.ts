import { Permission, PrismaClient, Role, UserRole } from '@prisma/client';
import { ROLE } from '../data/data';
import { PERMISSION } from '../data/permissions';
import { findDuplicates } from './helper.create';

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
  MANAGE_ISSP_P1ORGPROFILES1: {
    ...PERMISSION.MANAGE_ISSP_P1ORGPROFILES1,
    role: ROLE.SUPER_ADMIN,
  },
  CREATE_ISSP_P1ORGPROFILES1: {
    ...PERMISSION.CREATE_ISSP_P1ORGPROFILES1,
    role: ROLE.PLANNER,
  },
  READ_ISSP_P1ORGPROFILES1: {
    ...PERMISSION.READ_ISSP_P1ORGPROFILES1,
    role: ROLE.PLANNER,
  },
  UPDATE_ISSP_P1ORGPROFILES1: {
    ...PERMISSION.UPDATE_ISSP_P1ORGPROFILES1,
    role: ROLE.PLANNER,
  },
  DELETE_ISSP_P1ORGPROFILES1: {
    ...PERMISSION.DELETE_ISSP_P1ORGPROFILES1,
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
  MANAGE_DEPARTMENT: {
    ...PERMISSION.MANAGE_DEPARTMENT,
    role: ROLE.SUPER_ADMIN,
  },
  CREATE_DEPARTMENT: {
    ...PERMISSION.CREATE_DEPARTMENT,
    role: ROLE.ADMIN,
  },
  READ_DEPARTMENT: {
    ...PERMISSION.READ_DEPARTMENT,
    role: ROLE.ADMIN,
  },
  UPDATE_DEPARTMENT: {
    ...PERMISSION.UPDATE_DEPARTMENT,
    role: ROLE.ADMIN,
  },
  DELETE_DEPARTMENT: {
    ...PERMISSION.DELETE_DEPARTMENT,
    role: ROLE.SUPER_ADMIN,
  },
  MANAGE_PROJECT_TYPE: {
    ...PERMISSION.MANAGE_PROJECT_TYPE,
    role: ROLE.SUPER_ADMIN,
  },
  CREATE_PROJECT_TYPE: {
    ...PERMISSION.CREATE_PROJECT_TYPE,
    role: ROLE.ADMIN,
  },
  READ_PROJECT_TYPE: {
    ...PERMISSION.READ_PROJECT_TYPE,
    role: ROLE.ADMIN,
  },
  UPDATE_PROJECT_TYPE: {
    ...PERMISSION.UPDATE_PROJECT_TYPE,
    role: ROLE.ADMIN,
  },
  DELETE_PROJECT_TYPE: {
    ...PERMISSION.DELETE_PROJECT_TYPE,
    role: ROLE.SUPER_ADMIN,
  },
  MANAGE_PROJECT_TYPE_GROUP: {
    ...PERMISSION.MANAGE_PROJECT_TYPE_GROUP,
    role: ROLE.SUPER_ADMIN,
  },
  CREATE_PROJECT_TYPE_GROUP: {
    ...PERMISSION.CREATE_PROJECT_TYPE_GROUP,
    role: ROLE.ADMIN,
  },
  READ_PROJECT_TYPE_GROUP: {
    ...PERMISSION.READ_PROJECT_TYPE_GROUP,
    role: ROLE.ADMIN,
  },
  UPDATE_PROJECT_TYPE_GROUP: {
    ...PERMISSION.UPDATE_PROJECT_TYPE_GROUP,
    role: ROLE.ADMIN,
  },
  DELETE_PROJECT_TYPE_GROUP: {
    ...PERMISSION.DELETE_PROJECT_TYPE_GROUP,
    role: ROLE.SUPER_ADMIN,
  },
  MANAGE_PROJECT_CATEGORY: {
    ...PERMISSION.MANAGE_PROJECT_CATEGORY,
    role: ROLE.SUPER_ADMIN,
  },
  CREATE_PROJECT_CATEGORY: {
    ...PERMISSION.CREATE_PROJECT_CATEGORY,
    role: ROLE.ADMIN,
  },
  READ_PROJECT_CATEGORY: {
    ...PERMISSION.READ_PROJECT_CATEGORY,
    role: ROLE.ADMIN,
  },
  UPDATE_PROJECT_CATEGORY: {
    ...PERMISSION.UPDATE_PROJECT_CATEGORY,
    role: ROLE.ADMIN,
  },
  DELETE_PROJECT_CATEGORY: {
    ...PERMISSION.DELETE_PROJECT_CATEGORY,
    role: ROLE.SUPER_ADMIN,
  },
  MANAGE_PROJECT_IMPL_TYPE: {
    ...PERMISSION.MANAGE_PROJECT_IMPL_TYPE,
    role: ROLE.SUPER_ADMIN,
  },
  CREATE_PROJECT_IMPL_TYPE: {
    ...PERMISSION.CREATE_PROJECT_IMPL_TYPE,
    role: ROLE.ADMIN,
  },
  READ_PROJECT_IMPL_TYPE: {
    ...PERMISSION.READ_PROJECT_IMPL_TYPE,
    role: ROLE.ADMIN,
  },
  UPDATE_PROJECT_IMPL_TYPE: {
    ...PERMISSION.UPDATE_PROJECT_IMPL_TYPE,
    role: ROLE.ADMIN,
  },
  DELETE_PROJECT_IMPL_TYPE: {
    ...PERMISSION.DELETE_PROJECT_IMPL_TYPE,
    role: ROLE.SUPER_ADMIN,
  },
  MANAGE_BUDGET_TYPE: {
    ...PERMISSION.MANAGE_BUDGET_TYPE,
    role: ROLE.SUPER_ADMIN,
  },
  CREATE_BUDGET_TYPE: {
    ...PERMISSION.CREATE_BUDGET_TYPE,
    role: ROLE.ADMIN,
  },
  READ_BUDGET_TYPE: {
    ...PERMISSION.READ_BUDGET_TYPE,
    role: ROLE.ADMIN,
  },
  UPDATE_BUDGET_TYPE: {
    ...PERMISSION.UPDATE_BUDGET_TYPE,
    role: ROLE.ADMIN,
  },
  DELETE_BUDGET_TYPE: {
    ...PERMISSION.DELETE_BUDGET_TYPE,
    role: ROLE.SUPER_ADMIN,
  },
  MANAGE_BUDGET_SOURCE: {
    ...PERMISSION.MANAGE_BUDGET_SOURCE,
    role: ROLE.SUPER_ADMIN,
  },
  CREATE_BUDGET_SOURCE: {
    ...PERMISSION.CREATE_BUDGET_SOURCE,
    role: ROLE.ADMIN,
  },
  READ_BUDGET_SOURCE: {
    ...PERMISSION.READ_BUDGET_SOURCE,
    role: ROLE.ADMIN,
  },
  UPDATE_BUDGET_SOURCE: {
    ...PERMISSION.UPDATE_BUDGET_SOURCE,
    role: ROLE.ADMIN,
  },
  DELETE_BUDGET_SOURCE: {
    ...PERMISSION.DELETE_BUDGET_SOURCE,
    role: ROLE.SUPER_ADMIN,
  },
};

export async function createPermissions(prisma: PrismaClient) {
  findDuplicates(PERMISSIONS);

  // await prisma.permission.deleteMany();

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
