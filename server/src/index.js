const { ApolloServer } = require('apollo-server');
// START THIS FILE'S GRAPHQL SERVER COMMAND : node src/index.js
// const { PrismaClient, PrismaClient } = require('@prisma/client')
const fs = require('fs');
const path = require('path');
// Prisma Client exposes a CRUD API for the models in your datamodel for you to read and write in your database. These methods are auto-generated based on your model definitions in schema.prisma.
// const prisma = new PrismaClient()

// 1
// const typeDefs = `
//   type Query {
//     info: String!
//   }
// `

// 2
// const resolvers = {
//     Query: {
//       info: () => null,
//     }
//   }

// 3
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// })

// server
//   .listen()
//   .then(({ url }) =>
//     console.log(`Server is running on ${url}`)
//   );


// 1
// The typeDefs constant defines your GraphQL schema (more about this in a bit). Here, it defines a simple Query type with one field called info. This field has the type String!. The exclamation mark in the type definition means that this field is required and can never be null.
// const typeDefs = `
//   type Query {
//     info: String!
//     feed: [Link!]!
//   }
//   type Mutation {
//       post(url: String!, description: String!): Link!
//     }
//   type Link {
//     id: ID!
//     description: String!
//     url: String!
//   }
//   `

  


let links = [
    {
        id: 'link0-',
        url: 'http//localhost:4000',
        description: 'graphql server'
    },
    {
        id: 'link-1',
        url: 'www.howtographql.com',
        description: 'Fullstack tutorial for GraphQL'
    }
]

// 2
// The resolvers object is the actual implementation of the GraphQL schema. Notice how its structure is identical to the structure of the type definition inside typeDefs: Query.info.
const resolvers = {
    Query: {
        info: () => 'This is the API of Hacker News Clone',
        feed: () => links,
    },
    // Link: {
    //     id: (parent) => parent.id,
    //     description: (parent) => parent.description,
    //     url: (parent) => parent.url,
    //   },


//         // feed: () => links,
//         // feed: async (parent, args, context) => {
//         //     return context.prisma.link.findMany()
//         // },
//     },
//     //   Link: {
//     //     id: (parent) => parent.id,
//     //     description: (parent) => parent.description,
//     //     url: (parent) => parent.url,
//     //   }
    Mutation: {
        post: (parent,args) => { 
            let idCount = links.length

            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
              }
            links.push(link)
            return link
        }
    }

        // createLink was previously "post"
        // createLink:(parent, args, context, info) => {
        //     // let idCount = links.length
        //     const newLink = context.prisma.link.create({
        //         data: {
        //             url: args.url,
        //             description: args.description,
        //         },
        //     })
        //     return newLink
        // },

}

// 3
// Finally, the schema and resolvers are bundled and passed to ApolloServer which is imported from apollo-server. This tells the server what API operations are accepted and how they should be resolved.
// const server = new ApolloServer({
    // typeDefs: fs.readFileSync(
    //     path.join(__dirname, 'schema.graphql'),
    //     'utf8'
    // ),
    // typeDefs,
    // resolvers,
    // context: {
    //     prisma,
    // }
// })

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
      path.join(__dirname, 'schema.graphql'),
      'utf8'
    ),
    resolvers,
  })
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   })

server
  .listen()
//   .then(({ url, lizkane, fier }) =>
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );