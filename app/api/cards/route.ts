import { NextResponse } from 'next/server';
const { PrismaClient: Prisma } = require('../../../lib/generated/prisma');

const prisma = new Prisma();
// Function to ensure database connection
async function ensureConnection() {
  try {
    await prisma.$connect();
    return true;
  } catch (error) {
    console.error('Failed to connect to database:', error);
    return false;
  }
}

export async function GET(request: Request) {
  try {
    // Ensure database connection
    const isConnected = await ensureConnection();
    if (!isConnected) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const bank = searchParams.get('bank');

    const whereClause: any = {};
    if (category) {
      whereClause.category = category;
    } else if (bank) {
      whereClause.bankName = bank;
    }

    const cards = await prisma.cards.findMany({
      where: whereClause,
      orderBy: {
        starRating: 'desc'
      }
    });

    return NextResponse.json(cards);
  } catch (error) {
    console.error('Error fetching cards:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cards' },
      { status: 500 }
    );
  } finally {
    // Always disconnect after the operation
    await prisma.$disconnect();
  }
} 