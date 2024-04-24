/*
  Warnings:

  - You are about to drop the column `a1Mandate` on the `issp-p1-org-profiles-s1` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `issp-p1-org-profiles-s1` table. All the data in the column will be lost.
  - Added the required column `a1MandateFunctions` to the `issp-p1-org-profiles-s1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `a1MandateLegal` to the `issp-p1-org-profiles-s1` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "issp-p1-org-profiles-s1" DROP COLUMN "a1Mandate",
DROP COLUMN "name",
ADD COLUMN     "a1MandateFunctions" TEXT NOT NULL,
ADD COLUMN     "a1MandateLegal" TEXT NOT NULL,
ALTER COLUMN "a4FinalOutputs" SET NOT NULL,
ALTER COLUMN "a4FinalOutputs" SET DATA TYPE TEXT;
