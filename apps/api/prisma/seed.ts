import { PrismaClient } from '@prisma/client';
import { createUsers } from './seed/users';
import { createAgencies } from './seed/agencies';
import { createISSPs } from './seed/issps';
import { createCategories } from './seed/categories';

const prisma = new PrismaClient();

async function main() {
  await createCategories(prisma);
  await createAgencies(prisma);
  await createUsers(prisma);
  await createISSPs(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
