-- CreateEnum
CREATE TYPE "Category" AS ENUM ('BEST', 'REWARDS', 'CASHBACK', 'FUEL', 'LIFETIME_FREE', 'FOREX', 'RUPAY', 'INTERNATIONAL_TRAVEL', 'DOMESTIC_LOUNGE', 'INTERNATIONAL_LOUNGE', 'FINTECH');

-- CreateEnum
CREATE TYPE "BankName" AS ENUM ('HDFC', 'ICICI', 'SBI', 'AXIS', 'PNB', 'IDFC', 'AMERICAN_EXPRESS', 'INDUSIND', 'AU', 'HSBC', 'STANDARD_CHARTERED_BANK', 'BOB', 'CITI', 'KOTAK', 'FEDERAL_BANK', 'CANARA_BANK', 'PUNJAB_NATIONAL_BANK', 'IDBI', 'YES');

-- CreateTable
CREATE TABLE "cards" (
    "id" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "bankName" "BankName" NOT NULL,
    "cardName" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT NOT NULL,
    "joiningFee" INTEGER NOT NULL,
    "renewalFee" INTEGER NOT NULL,
    "bestSuitedFor" TEXT NOT NULL,
    "rewardType" TEXT NOT NULL,
    "welcomeBenefits" TEXT NOT NULL,
    "starRating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);
