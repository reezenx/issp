/*
  Warnings:

  - You are about to alter the column `cost` on the `projects` table. The data in that column could be lost. The data in that column will be cast from `Decimal(19,2)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "isspId" TEXT,
ALTER COLUMN "cost" SET DATA TYPE DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_isspId_fkey" FOREIGN KEY ("isspId") REFERENCES "issps"("id") ON DELETE SET NULL ON UPDATE CASCADE;
