import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const demoCounter = await prisma.clickCounter.upsert({
    where: { id: 1 },
    update: {},
    create: {
        id: 1,
        clicks: 0,
    },
  })

  
  console.log({ demoCounter })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
