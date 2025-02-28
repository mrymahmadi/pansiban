-- CreateEnum
CREATE TYPE "Contract" AS ENUM ('ANNUALLY', 'FOUR_MONTHS');

-- CreateEnum
CREATE TYPE "PansionType" AS ENUM ('EMPLOYEE', 'STUDENT');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('GHOST', 'USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "positionId" INTEGER NOT NULL,
    "pansionId" INTEGER NOT NULL,
    "provinceId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "level" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pansion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL DEFAULT 'nothing',
    "codeParvane" TEXT NOT NULL,
    "Capacity" INTEGER NOT NULL DEFAULT 0,
    "advancePayment" DOUBLE PRECISION,
    "chargeMony" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "typeOfContract" "Contract" NOT NULL DEFAULT 'ANNUALLY',
    "imageUrl" TEXT,
    "description" TEXT NOT NULL DEFAULT 'No description provided',
    "commentId" INTEGER DEFAULT 1,
    "provinceId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "typeOfPansion" "PansionType" NOT NULL DEFAULT 'EMPLOYEE',
    "numberOfRoom" INTEGER NOT NULL DEFAULT 0,
    "numberOfBed" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Pansion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "numberRoom" INTEGER NOT NULL,
    "numberOfBeds" INTEGER NOT NULL,
    "rent" DOUBLE PRECISION NOT NULL,
    "pansionId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Province" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "enName" TEXT NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "enName" TEXT NOT NULL,
    "provinceId" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PosInPansion" (
    "positionId" INTEGER NOT NULL,
    "pansionId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" INTEGER NOT NULL,

    CONSTRAINT "PosInPansion_pkey" PRIMARY KEY ("positionId","pansionId")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Options" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ponsionOptions" (
    "pansionId" INTEGER NOT NULL,
    "optionId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" INTEGER NOT NULL,

    CONSTRAINT "ponsionOptions_pkey" PRIMARY KEY ("pansionId","optionId")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "minAdvancePay" DOUBLE PRECISION NOT NULL,
    "maxAdvancePay" DOUBLE PRECISION NOT NULL,
    "minRent" DOUBLE PRECISION NOT NULL,
    "maxRent" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pansion_codeParvane_key" ON "Pansion"("codeParvane");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pansionId_fkey" FOREIGN KEY ("pansionId") REFERENCES "Pansion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pansion" ADD CONSTRAINT "Pansion_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pansion" ADD CONSTRAINT "Pansion_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pansion" ADD CONSTRAINT "Pansion_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_pansionId_fkey" FOREIGN KEY ("pansionId") REFERENCES "Pansion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PosInPansion" ADD CONSTRAINT "PosInPansion_assignedBy_fkey" FOREIGN KEY ("assignedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PosInPansion" ADD CONSTRAINT "PosInPansion_pansionId_fkey" FOREIGN KEY ("pansionId") REFERENCES "Pansion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PosInPansion" ADD CONSTRAINT "PosInPansion_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ponsionOptions" ADD CONSTRAINT "ponsionOptions_assignedBy_fkey" FOREIGN KEY ("assignedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ponsionOptions" ADD CONSTRAINT "ponsionOptions_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Options"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ponsionOptions" ADD CONSTRAINT "ponsionOptions_pansionId_fkey" FOREIGN KEY ("pansionId") REFERENCES "Pansion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
