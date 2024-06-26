-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Manufacturer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Manufacturer_manufacturer_key" ON "Manufacturer"("manufacturer");
