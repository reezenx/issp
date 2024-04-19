/*
  Warnings:

  - You are about to drop the `project-sub-types` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[p1OrgProfileS1Id]` on the table `issps` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[p1OrgProfileS2Id]` on the table `issps` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "project-types" DROP CONSTRAINT "project-types_projectTypeGroupId_fkey";

-- AlterTable
ALTER TABLE "issps" ADD COLUMN     "p1OrgProfileS1Id" TEXT,
ADD COLUMN     "p1OrgProfileS2Id" TEXT;

-- DropTable
DROP TABLE "project-sub-types";

-- CreateTable
CREATE TABLE "project-type-groups" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "readOnly" BOOLEAN DEFAULT false,
    "tags" TEXT[],
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "project-type-groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "issp-p1-org-profiles-s1" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "a1Mandate" TEXT NOT NULL,
    "a2Vision" TEXT NOT NULL,
    "a3Mission" TEXT NOT NULL,
    "a4FinalOutputs" TEXT[],
    "order" INTEGER NOT NULL DEFAULT 1,
    "part" INTEGER NOT NULL DEFAULT 1,
    "readOnly" BOOLEAN DEFAULT false,
    "tags" TEXT[],
    "isspId" TEXT,
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "issp-p1-org-profiles-s1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "issp-p1-org-profiles-s2" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "b1PlantillaPosition" TEXT NOT NULL,
    "b1OrgUnit" TEXT NOT NULL,
    "b1Email" TEXT NOT NULL,
    "b1Contacts" TEXT[],
    "b2OtherSources" TEXT NOT NULL,
    "b3TotalNoEmp" TEXT NOT NULL,
    "b3NoRegionalOffices" TEXT NOT NULL,
    "b3NoProvOffices" TEXT NOT NULL,
    "b3NoOthersOffices" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 2,
    "part" INTEGER NOT NULL DEFAULT 1,
    "readOnly" BOOLEAN DEFAULT false,
    "tags" TEXT[],
    "isspId" TEXT,
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "issp-p1-org-profiles-s2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "issp-parts" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "readOnly" BOOLEAN DEFAULT true,
    "tags" TEXT[],
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "issp-parts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "issp-sub-parts" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "readOnly" BOOLEAN DEFAULT true,
    "tags" TEXT[],
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "issp-sub-parts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "project-type-groups_code_key" ON "project-type-groups"("code");

-- CreateIndex
CREATE UNIQUE INDEX "issp-parts_code_key" ON "issp-parts"("code");

-- CreateIndex
CREATE UNIQUE INDEX "issp-sub-parts_code_key" ON "issp-sub-parts"("code");

-- CreateIndex
CREATE UNIQUE INDEX "issps_p1OrgProfileS1Id_key" ON "issps"("p1OrgProfileS1Id");

-- CreateIndex
CREATE UNIQUE INDEX "issps_p1OrgProfileS2Id_key" ON "issps"("p1OrgProfileS2Id");

-- AddForeignKey
ALTER TABLE "project-types" ADD CONSTRAINT "project-types_projectTypeGroupId_fkey" FOREIGN KEY ("projectTypeGroupId") REFERENCES "project-type-groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issps" ADD CONSTRAINT "issps_p1OrgProfileS1Id_fkey" FOREIGN KEY ("p1OrgProfileS1Id") REFERENCES "issp-p1-org-profiles-s1"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issps" ADD CONSTRAINT "issps_p1OrgProfileS2Id_fkey" FOREIGN KEY ("p1OrgProfileS2Id") REFERENCES "issp-p1-org-profiles-s2"("id") ON DELETE SET NULL ON UPDATE CASCADE;
