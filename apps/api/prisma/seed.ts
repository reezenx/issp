import { createActionHistory } from './seed/actions/action-history.create';
import { createAgencies } from './seed/actions/agencies.create';
import { createCategories } from './seed/actions/categories.create';
import { createDepartments } from './seed/actions/departments.create';
import { createISSPs } from './seed/actions/issps.create';
import { createPermissions } from './seed/actions/permissions.create';
import { createProjectDetails } from './seed/actions/project-details.create';
import { createProjects } from './seed/actions/projects.create';
import { createUserRoles } from './seed/actions/roles.create';
import { createUsers } from './seed/actions/users.create';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // await createCategories(prisma);
  // await createDepartments(prisma);
  // await createAgencies(prisma);
  // await createUserRoles(prisma);
  // await createPermissions(prisma);
  // await createUsers(prisma);
  // await createProjectDetails(prisma);
  // await createProjects(prisma);
  // await createISSPs(prisma);
  await createActionHistory(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
