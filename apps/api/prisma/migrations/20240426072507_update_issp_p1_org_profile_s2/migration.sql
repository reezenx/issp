/*
  Warnings:

  - You are about to drop the column `name` on the `issp-p1-org-profiles-s2` table. All the data in the column will be lost.
  - Changed the type of `b3TotalNoEmp` on the `issp-p1-org-profiles-s2` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `b3NoRegionalOffices` on the `issp-p1-org-profiles-s2` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `b3NoProvOffices` on the `issp-p1-org-profiles-s2` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `b3NoOthersOffices` on the `issp-p1-org-profiles-s2` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "issp-p1-org-profiles-s2" DROP COLUMN "name",
DROP COLUMN "b3TotalNoEmp",
ADD COLUMN     "b3TotalNoEmp" INTEGER NOT NULL,
DROP COLUMN "b3NoRegionalOffices",
ADD COLUMN     "b3NoRegionalOffices" INTEGER NOT NULL,
DROP COLUMN "b3NoProvOffices",
ADD COLUMN     "b3NoProvOffices" INTEGER NOT NULL,
DROP COLUMN "b3NoOthersOffices",
ADD COLUMN     "b3NoOthersOffices" INTEGER NOT NULL;
