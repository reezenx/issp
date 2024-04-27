/*
  Warnings:

  - Added the required column `b1PlannerName` to the `issp-p1-org-profiles-s2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `b2AnnualICTBudget` to the `issp-p1-org-profiles-s2` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "issp-p1-org-profiles-s2" ADD COLUMN     "b1PlannerName" TEXT NOT NULL,
ADD COLUMN     "b2AnnualICTBudget" DOUBLE PRECISION NOT NULL;
