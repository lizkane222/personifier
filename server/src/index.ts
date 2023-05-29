import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
    const allSegmenters = await prisma.segmenter.findMany()
    console.log(allSegmenters)
    const allProfilephotos = await prisma.profilephoto.findMany()
    console.log(allProfilephotos)

    // await prisma.user.create({
    //     data: {
    //         anonymousId : "123-456-67888",
    //         email : "olly.podge@testing.com",
    //         firstName : "Olly",
    //         lastName : "Podge",
    //         phoneNumber : "555-444-3333",
    //         username : "ollypodge",
    //     }
    // })
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