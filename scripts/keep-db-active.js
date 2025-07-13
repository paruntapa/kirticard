const prisma = require('../lib/prisma').default;

async function keepDbActive() {
  try {
    // Simple query to keep the database active
    const count = await prisma.cards.count();
    console.log('✅ Database ping successful -', new Date().toISOString(), `(${count} cards)`);
  } catch (error) {
    console.error('❌ Database ping failed:', error.message);
  }
}

keepDbActive(); 