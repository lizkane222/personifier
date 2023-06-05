import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {

    await prisma.user.create({
        data: {
            anonymousId : "123-456-67888",
            email : "olly.podge@testing.com",
            firstName : "Olly",
            lastName : "Podge",
            phoneNumber : "555-444-3333",
            username : "ollypodge"
        }
    })

    const allUsers = await prisma.user.findMany({
        include:{
            segmenters: true,
            profilePhoto: true,
        },
    })
        console.log(allUsers)
    const allSegmenters = await prisma.segmenter.findMany()
        console.log(allSegmenters)
    const allProfilephotos = await prisma.profilephoto.findMany()
        console.log(allProfilephotos)

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




    

