-- AlterTable
ALTER TABLE "User" ADD COLUMN     "banner" TEXT;

-- CreateTable
CREATE TABLE "UserConnections" (
    "id" TEXT NOT NULL,
    "followerId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserConnections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserConnections_followerId_followingId_key" ON "UserConnections"("followerId", "followingId");

-- AddForeignKey
ALTER TABLE "UserConnections" ADD CONSTRAINT "UserConnections_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserConnections" ADD CONSTRAINT "UserConnections_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
