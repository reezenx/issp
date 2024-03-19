-- CreateEnum
CREATE TYPE "Role" AS ENUM ('VIEWER', 'PLANNER', 'EVALUATOR', 'ENDORSER', 'APPROVER', 'ADMIN', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "ISSP_Status" AS ENUM ('NOT_STARTED', 'UNDER_REVIEW', 'FOR_VALIDATION', 'FOR_ENDORSEMENT', 'APPROVED');

-- CreateEnum
CREATE TYPE "User_Status" AS ENUM ('ACTIVE', 'INACTIVE', 'DELETED');

-- CreateEnum
CREATE TYPE "Agency_Code" AS ENUM ('DICT', 'DILG', 'DAR', 'DA', 'DBM', 'DE');

-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agencies" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "tags" TEXT[],

    CONSTRAINT "agencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "agencyId" TEXT,
    "role" "Role"[] DEFAULT ARRAY['VIEWER']::"Role"[],
    "status" "User_Status" NOT NULL DEFAULT 'INACTIVE',
    "tags" TEXT[],

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "issps" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "ISSP_Status" NOT NULL DEFAULT 'NOT_STARTED',
    "yearStart" TEXT NOT NULL,
    "yearEnd" TEXT NOT NULL,
    "tags" TEXT[],
    "agencyId" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "issps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ISSPToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "issps_title_key" ON "issps"("title");

-- CreateIndex
CREATE UNIQUE INDEX "_ISSPToUser_AB_unique" ON "_ISSPToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ISSPToUser_B_index" ON "_ISSPToUser"("B");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agencies" ADD CONSTRAINT "agencies_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "agencies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issps" ADD CONSTRAINT "issps_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "agencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ISSPToUser" ADD CONSTRAINT "_ISSPToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "issps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ISSPToUser" ADD CONSTRAINT "_ISSPToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;