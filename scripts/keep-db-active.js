const { PrismaClient } = require('../lib/generated/prisma');

const prisma = new PrismaClient();

async function keepDbActive() {
  try {
    // Simple query to keep the database active
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Database ping successful -', new Date().toISOString());
  } catch (error) {
    console.error('❌ Database ping failed:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

keepDbActive(); 