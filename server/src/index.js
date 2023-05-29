const { ApolloServer } = require('apollo-server');
// START THIS FILE'S GRAPHQL SERVER COMMAND : node src/index.js
const { PrismaClient, PrismaClient } = require('@prisma/client')
const fs = require('fs');
const path = require('path');
// Prisma Client exposes a CRUD API for the models in your datamodel for you to read and write in your database. These methods are auto-generated based on your model definitions in schema.prisma.
const prisma = new PrismaClient()


// 1
// The typeDefs constant defines your GraphQL schema (more about this in a bit). Here, it defines a simple Query type with one field called info. This field has the type String!. The exclamation mark in the type definition means that this field is required and can never be null.
// const typeDefs = `
//   type Query {
//     info: String!
//     feed: [Link!]!
//   }

//   type Mutation {
//     post(url: String!, description: String!): Link!
//   }
  
//   type Link {
//     id: ID!
//     description: String!
//     url: String!
//   }
// `


// let links = [
//     {
//         id: 'link0-',
//         url: 'http//localhost:4000',
//         description: 'graphql server'
//     },
//     {
//         id: 'link-1',
//         url: 'www.howtographql.com',
//         description: 'Fullstack tutorial for GraphQL'
//     }
// ]

// 2
// The resolvers object is the actual implementation of the GraphQL schema. Notice how its structure is identical to the structure of the type definition inside typeDefs: Query.info.
const resolvers = {
    Query: {
        info: () => 'This is the API of Hacker News Clone',
        User : {
            id : (parent) => parent.id,
            v : (parent) => parent.v,
            anonymousId : (parent) => parent.anonymousId,
            createdAt : (parent) => parent.createdAt,
            email : (parent) => parent.email,
            firstName : (parent) => parent.firstName,
            lastName : (parent) => parent.lastName,
            phoneNumber : (parent) => parent.phoneNumber,
            userId : (parent) => parent.userId,
            traits : (parent) => parent.traits,
            updatedAt : (parent) => parent.updatedAt,
            username : (parent) => parent.username,
            profilePhoto : (parent) => parent.profilePhoto,
            segmenters : (parent) => parent.segmenters,
        },
        Segmenter : {
            id : (parent) => parent.id,
            v : (parent) => parent.v,
            createdAt : (parent) => parent.createdAt,
            firstName : (parent) => parent.firstName,
            internalTeam : (parent) => parent.internalTeam,
            jobRole : (parent) => parent.jobRole,
            lastName : (parent) => parent.lastName,
            userId : (parent) => parent.userId,
            myUsers : (parent) => parent.myUsers,
            phoneNumber : (parent) => parent.phoneNumber,
            pronouns : (parent) => parent.pronouns,
            region : (parent) => parent.region,
            segmentEmail : (parent) => parent.segmentEmail,
            slackName : (parent) => parent.slackName,
            team : (parent) => parent.team,
            twilioEmail : (parent) => parent.twilioEmail,
            updatedAt : (parent) => parent.updatedAt,
            workspaceId : (parent) => parent.workspaceId,
            workspaceSlug : (parent) => parent.workspaceSlug,
        },
        Profilephoto : {
            id: (parent) => parent.id,
            v: (parent) => parent.v,
            alt_description: (parent) => parent.alt_description,
            blur_hash: (parent) => parent.blur_hash,
            color: (parent) => parent.color,
            height: (parent) => parent.height,
            id_: (parent) => parent.id_,
            links: (parent) => parent.links,
            links_download: (parent) => parent.links_download,
            links_download_location: (parent) => parent.links_download_location,
            links_html: (parent) => parent.links_html,
            links_self: (parent) => parent.links_self,
            urls: (parent) => parent.urls,
            urls_full: (parent) => parent.urls_full,
            urls_raw: (parent) => parent.urls_raw,
            urls_regular: (parent) => parent.urls_regular,
            urls_small: (parent) => parent.urls_small,
            urls_small_s3: (parent) => parent.urls_small_s3,
            urls_thumb: (parent) => parent.urls_thumb,
            users: (parent) => parent.users,
            width: (parent) => parent.width,
            model: (parent) => parent.model,
        }
        // feed: () => links,
        // feed: async (parent, args, context) => {
        //     return context.prisma.link.findMany()
        // },
    },
    //   Link: {
    //     id: (parent) => parent.id,
    //     description: (parent) => parent.description,
    //     url: (parent) => parent.url,
    //   }
    Mutation: {
        // createLink was previously "post"
        createLink:(parent, args, context, info) => {
            // let idCount = links.length
            const newLink = context.prisma.link.create({
                data: {
                    url: args.url,
                    description: args.description,
                },
            })
            return newLink
        },

        createSegmenter:(parent, args, context, info) => {
            const newSegmenter = context.prisma.segmenter.create({
                data: {
                    id : args.id,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    slackName: args.slackName,
                    segmentEmail: args.segmentEmail,
                    twilioEmail: args.twilioEmail,
                    internalTeam: args.internalTeam,
                    team: args.team,
                    workspaceSlug: args.workspaceSlug,
                    workspaceId: args.workspaceId,
                    preferredPronouns: args.preferredPronouns,
                    phoneNumber: args.phoneNumber,
                    jobRole: args.jobRole,
                    region: args.region,
                },
            })
            return newSegmenter
        },

        createUser:(parent, args, context, info) => {
            const newUser = context.prisma.user.create({
                data: {
                    id : args.id,
                    userId : args.userId,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    username: args.username,
                    phoneNumber: args.phoneNumber,
                    username: args.username,
                    profilephoto: args.profilephoto,
                    segmenters: args.segmenters,
                    traits: {
                        firstName: args.firstName,
                        lastName: args.lastName,
                        email: args.email,
                        username: args.username,
                        phoneNumber: args.phoneNumber,
                        username: args.username,
                        profilephoto: args.profilephoto,
                        segmenters: args.segmenters,
                    }
                },
            })
            return newUser
        },

        createProfilePhoto:(parent, args, context, info) => {
            const newProfilePhoto = context.prisma.profilephoto.create({
                data: {
                    id : args.id,
                    alt_description : args.alt_description,
                    blur_hash : args.blur_hash,
                    color : args.color,
                    height : args.height,
                    id_ : args.id,
                    links : args.links,
                    links_download : args.links_download,
                    links_html : args.links_html,
                    links_self : args.links_self,
                    urls : args.urls,
                    urls_full : args.urls_full,
                    urls_raw : args.urls_raw,
                    urls_regular : args.urls_regular,
                    urls_small : args.urls_small,
                    urls_small_s3 : args.urls_small_s3,
                    urls_thumb : args.urls_thumb,
                    width : args.width,
                },
            })
            return newProfilePhoto
        },
    },
}

// 3
// Finally, the schema and resolvers are bundled and passed to ApolloServer which is imported from apollo-server. This tells the server what API operations are accepted and how they should be resolved.
const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    context: {
        prisma,
    }
})

server
  .listen()
//   .then(({ url, lizkane, fier }) =>
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );