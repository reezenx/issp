/*
  Warnings:

  - You are about to drop the column `projectBudgetSourceId` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `projectBudgetTypeId` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `projectCategoryId` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `projectImplementationTypeId` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `projectTypeId` on the `projects` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_projectBudgetSourceId_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_projectBudgetTypeId_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_projectCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_projectImplementationTypeId_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_projectTypeId_fkey";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "projectBudgetSourceId",
DROP COLUMN "projectBudgetTypeId",
DROP COLUMN "projectCategoryId",
DROP COLUMN "projectImplementationTypeId",
DROP COLUMN "projectTypeId",
ADD COLUMN     "budgetSourceId" TEXT,
ADD COLUMN     "budgetTypeId" TEXT,
ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "implementationTypeId" TEXT,
ADD COLUMN     "typeId" TEXT;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "project-types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "project-categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_implementationTypeId_fkey" FOREIGN KEY ("implementationTypeId") REFERENCES "project-implementation-types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_budgetTypeId_fkey" FOREIGN KEY ("budgetTypeId") REFERENCES "budget-types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_budgetSourceId_fkey" FOREIGN KEY ("budgetSourceId") REFERENCES "budget-source"("id") ON DELETE SET NULL ON UPDATE CASCADE;
