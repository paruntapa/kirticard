import { NextResponse } from 'next/server';
const { PrismaClient: Prisma } = require('../../../lib/generated/prisma');

export async function GET() {
  // Create a new Prisma instance for each request (serverless best practice)
  const prisma = new Prisma();
  
  try {
    // Simple database ping to keep connection alive
    await prisma.$queryRaw`SELECT 1`;
    
    return NextResponse.json({ 
      status: 'healthy', 
      timestamp: new Date().toISOString(),
      database: 'connected'
    });
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      { 
        status: 'unhealthy', 
        timestamp: new Date().toISOString(),
        database: 'disconnected',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 