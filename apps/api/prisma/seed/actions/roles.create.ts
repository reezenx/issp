import { PrismaClient, Role, UserRole } from '@prisma/client';
import { ROLE } from '../data/data';

export const ROLES: Record<Role | string, Pick<UserRole, 'id' | 'name'>> = {
  SUPER_ADMIN: ROLE.SUPER_ADMIN,
  ADMIN: ROLE.ADMIN,
  ASSIGNER: ROLE.ASSIGNER,
  PLANNER: ROLE.PLANNER,
  EVALUATOR: ROLE.EVALUATOR,
  VALIDATOR: ROLE.VALIDATOR,
  APPROVER: ROLE.APPROVER,
};

export async function createUserRoles(prisma: PrismaClient) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(ROLES).forEach(async ([key, { id, name }]) => {
    const item = {
      id,
      name,
      createdAt: new Date(),
      createdBy: 'System',
    };

    await prisma.userRole.upsert({
      where: { id },
      create: item,
      update: item,
    });
  });
}
