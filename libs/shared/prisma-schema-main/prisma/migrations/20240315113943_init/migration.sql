-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'VIEWER', 'EVALUATOR', 'ENDORSER', 'APPROVER', 'ADMIN', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "ISSP_Status" AS ENUM ('NOT_STARTED', 'UNDER_REVIEW', 'FOR_VALIDATION', 'FOR_ENDORSEMENT', 'APPROVED');

-- CreateEnum
CREATE TYPE "User_Status" AS ENUM ('ACTIVE', 'INACTIVE', 'DELETED');

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
    "name" TEXT NOT NULL,

    CONSTRAINT "agencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "agencyId" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "status" "User_Status" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "issps" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT,
    "status" "ISSP_Status" NOT NULL DEFAULT 'NOT_STARTED',
    "yearStart" TEXT NOT NULL,
    "yearEnd" TEXT NOT NULL,

    CONSTRAINT "issps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AuthoredISSPs" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EvaluatedISSPs" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EndorsedISSPs" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ApprovedISSPs" (
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
CREATE UNIQUE INDEX "_AuthoredISSPs_AB_unique" ON "_AuthoredISSPs"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthoredISSPs_B_index" ON "_AuthoredISSPs"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EvaluatedISSPs_AB_unique" ON "_EvaluatedISSPs"("A", "B");

-- CreateIndex
CREATE INDEX "_EvaluatedISSPs_B_index" ON "_EvaluatedISSPs"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EndorsedISSPs_AB_unique" ON "_EndorsedISSPs"("A", "B");

-- CreateIndex
CREATE INDEX "_EndorsedISSPs_B_index" ON "_EndorsedISSPs"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ApprovedISSPs_AB_unique" ON "_ApprovedISSPs"("A", "B");

-- CreateIndex
CREATE INDEX "_ApprovedISSPs_B_index" ON "_ApprovedISSPs"("B");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "agencies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthoredISSPs" ADD CONSTRAINT "_AuthoredISSPs_A_fkey" FOREIGN KEY ("A") REFERENCES "issps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthoredISSPs" ADD CONSTRAINT "_AuthoredISSPs_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EvaluatedISSPs" ADD CONSTRAINT "_EvaluatedISSPs_A_fkey" FOREIGN KEY ("A") REFERENCES "issps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EvaluatedISSPs" ADD CONSTRAINT "_EvaluatedISSPs_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EndorsedISSPs" ADD CONSTRAINT "_EndorsedISSPs_A_fkey" FOREIGN KEY ("A") REFERENCES "issps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EndorsedISSPs" ADD CONSTRAINT "_EndorsedISSPs_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApprovedISSPs" ADD CONSTRAINT "_ApprovedISSPs_A_fkey" FOREIGN KEY ("A") REFERENCES "issps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApprovedISSPs" ADD CONSTRAINT "_ApprovedISSPs_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
