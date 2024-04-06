/*
  Warnings:

  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_roleId_fkey";

-- AlterTable
ALTER TABLE "agencies" ADD COLUMN     "readOnly" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "budget-source" ADD COLUMN     "readOnly" BOOLEAN DEFAULT false,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "budget-types" ADD COLUMN     "readOnly" BOOLEAN DEFAULT false,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "readOnly" BOOLEAN DEFAULT false,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "departments" ADD COLUMN     "readOnly" BOOLEAN DEFAULT false,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "permissions" ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "project-categories" ADD COLUMN     "readOnly" BOOLEAN DEFAULT false,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "project-implementation-types" ADD COLUMN     "readOnly" BOOLEAN DEFAULT false,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "project-sub-types" ADD COLUMN     "readOnly" BOOLEAN DEFAULT false,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "project-types" ADD COLUMN     "readOnly" BOOLEAN DEFAULT false,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "roles" ADD COLUMN     "readOnly" BOOLEAN DEFAULT false,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "readOnly" BOOLEAN DEFAULT false,
ALTER COLUMN "roleId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Temp" (
    "id" TEXT NOT NULL,
    "role" "Role",

    CONSTRAINT "Temp_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
