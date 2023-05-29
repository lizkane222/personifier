const {PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
// COMMAND TO RUN THIS FILE : node src/script.js
// The role of the Prisma Client in the GraphQL API is to migrate your database schema

async function main() {
    // const newLink = await prisma.link.create({
    //     data: {
    //         description: 'Fullstack tutorial for GraphQL-4',
    //         url: 'www.howtographql-4.com',
    //     },
    // })
    // const allLinks = await prisma.link.findMany()
    // // const link = await.prisma.link.
    // console.log(allLinks)
    
    // SEED NEW SEGMENTER
    const newSegmenter = await prisma.segmenter.create({
        data: {
            firstName: "Liz",
            lastName: "Kane",
            slackName: "lkane",
            segmentEmail: "liz.kane@segment.com",
            twilioEmail: "lkane@twilio.com",
            internalTeam: "Team-2 : (Connections 2, Cloud Mode, Server-Side, Engage)",
            team: "Customer Success Engineering",
            workspaceSlug: "liz-kane",
            workspaceId: "123456789011",
            preferredPronouns: "she/her",
            phoneNumber: "555-535-5555",
            jobRole: "Senior Customer Success Engineer",
            region: "California, PST"
        },
    })
    const allSegmenters = await prisma.segmenter.findMany()
    console.log(allSegmenters)
    
    // SEED NEW USER
    const newUser = await prisma.user.create({
        data: {
            firstName: "Jackson",
            lastName: "Kane",
            email: "jacksonkane@testing.com",
            username: "jackson",
            phoneNumber: "555-552-5555"
        },
    })
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
    
    // SEED NEW PROFILEPHOTO
    const newProfilePhoto = await prisma.profilephoto.create({
        data: {
            id : "mEZ3PoFGs_k",
            alt_description : "closeup photography of woman smiling",
            blur_hash : "LLEeV~xbKiS2_Mf+e.of9]NGrqs:",
            color : "#260c0c",
            height : 5616,
            id : "mEZ3PoFGs_k",
            links : {"self": "https://api.unsplash.com/photos/mEZ3PoFGs_k", "html": "https://unsplash.com/photos/mEZ3PoFGs_k", "download": "https://unsplash.com/photos/mEZ3PoFGs_k/download?i…wcm9maWxlJTIwcGhvdG9zfGVufDB8fHx8MTY4NDcyNDkzMnww", "download_location": "https://api.unsplash.com/photos/mEZ3PoFGs_k/downlo…wcm9maWxlJTIwcGhvdG9zfGVufDB8fHx8MTY4NDcyNDkzMnww"},
            links_download : "https://unsplash.com/photos/mEZ3PoFGs_k/download?i…wcm9maWxlJTIwcGhvdG9zfGVufDB8fHx8MTY4NDcyNDkzMnww",
            links_download_location : "https://api.unsplash.com/photos/mEZ3PoFGs_k/downlo…wcm9maWxlJTIwcGhvdG9zfGVufDB8fHx8MTY4NDcyNDkzMnww",
            links_html : "https://unsplash.com/photos/mEZ3PoFGs_k",
            links_self : "https://api.unsplash.com/photos/mEZ3PoFGs_k",
            urls : {"raw": "https://images.unsplash.com/photo-1494790108377-be…hvdG9zfGVufDB8fHx8MTY4NDcyNDkzMnww&ixlib=rb-4.0.3", "full": "https://images.unsplash.com/photo-1494790108377-be…zfGVufDB8fHx8MTY4NDcyNDkzMnww&ixlib=rb-4.0.3&q=85", "regular": "https://images.unsplash.com/photo-1494790108377-be…B8fHx8MTY4NDcyNDkzMnww&ixlib=rb-4.0.3&q=80&w=1080", "small": "https://images.unsplash.com/photo-1494790108377-be…DB8fHx8MTY4NDcyNDkzMnww&ixlib=rb-4.0.3&q=80&w=400", "thumb": "https://images.unsplash.com/photo-1494790108377-be…DB8fHx8MTY4NDcyNDkzMnww&ixlib=rb-4.0.3&q=80&w=200", 
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1494790108377-be9c29b29330"},
            urls_full : "https://images.unsplash.com/photo-1494790108377-be…zfGVufDB8fHx8MTY4NDcyNDkzMnww&ixlib=rb-4.0.3&q=85",
            urls_raw : "https://images.unsplash.com/photo-1494790108377-be…hvdG9zfGVufDB8fHx8MTY4NDcyNDkzMnww&ixlib=rb-4.0.3",
            urls_regular : "https://images.unsplash.com/photo-1494790108377-be…B8fHx8MTY4NDcyNDkzMnww&ixlib=rb-4.0.3&q=80&w=1080",
            urls_small : "https://images.unsplash.com/photo-1494790108377-be…DB8fHx8MTY4NDcyNDkzMnww&ixlib=rb-4.0.3&q=80&w=400",
            urls_small_s3 : "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1494790108377-be9c29b29330",
            urls_thumb : "https://images.unsplash.com/photo-1494790108377-be…DB8fHx8MTY4NDcyNDkzMnww&ixlib=rb-4.0.3&q=80&w=200",
            width : 3744,         
        },
    })
    const allProfilePhotos = await prisma.profilephoto.findMany()
    console.log(allProfilePhotos)
}

// Define an async function called main to send queries to the database. You will write all your queries inside this function.
main()
    .catch(error => {
        throw error
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

