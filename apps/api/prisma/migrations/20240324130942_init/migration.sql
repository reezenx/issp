-- CreateEnum
CREATE TYPE "Role" AS ENUM ('VIEWER', 'PLANNER', 'EVALUATOR', 'ENDORSER', 'APPROVER', 'ADMIN', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "ISSP_Status" AS ENUM ('NOT_STARTED', 'UNDER_REVIEW', 'FOR_VALIDATION', 'FOR_ENDORSEMENT', 'APPROVED');

-- CreateEnum
CREATE TYPE "User_Status" AS ENUM ('ACTIVE', 'INACTIVE', 'DELETED');

-- CreateEnum
CREATE TYPE "Agency_Code" AS ENUM ('DICT', 'DILG', 'DAR', 'DA', 'DBM', 'DE');

-- CreateEnum
CREATE TYPE "ISSP_Action" AS ENUM ('VIEW', 'CREATE', 'AMEND', 'INSERT', 'ASSIGN', 'UPDATE', 'ENDORSED', 'APPROVE');

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
    "agencyId" TEXT NOT NULL,
    "role" "Role"[] DEFAULT ARRAY['VIEWER']::"Role"[],
    "status" "User_Status" NOT NULL,
    "tags" TEXT[],
    "authoredIsspIds" TEXT[],

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "issps" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "ISSP_Status" NOT NULL DEFAULT 'NOT_STARTED',
    "startYear" INTEGER NOT NULL,
    "endYear" INTEGER NOT NULL,
    "tags" TEXT[],
    "agencyId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "version" INTEGER DEFAULT 1,
    "readOnly" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "issps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action_History" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isspId" TEXT NOT NULL,
    "isspVersion" INTEGER NOT NULL,
    "action" "ISSP_Action" NOT NULL,
    "changes" TEXT[],
    "parentModule" TEXT NOT NULL,
    "childModule" TEXT NOT NULL,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "Action_History_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ISSPUsers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ISSPUsers_AB_unique" ON "_ISSPUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_ISSPUsers_B_index" ON "_ISSPUsers"("B");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agencies" ADD CONSTRAINT "agencies_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "agencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issps" ADD CONSTRAINT "issps_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "agencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issps" ADD CONSTRAINT "issps_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action_History" ADD CONSTRAINT "Action_History_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action_History" ADD CONSTRAINT "Action_History_isspId_fkey" FOREIGN KEY ("isspId") REFERENCES "issps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ISSPUsers" ADD CONSTRAINT "_ISSPUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "issps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ISSPUsers" ADD CONSTRAINT "_ISSPUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
