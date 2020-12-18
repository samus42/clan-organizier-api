const { ApolloServer, gql } = require('apollo-server')
const fs = require('fs')
require('dotenv').config()
const resolvers = require('./resolvers')
const { createParameters } = require('./apolloServer')
const { getDB } = require('./data/mongo')
/*
const typeDefs = gql`${fs.readFileSync('./api/schema.graphqls', 'utf8')}`
const server = new ApolloServer({
    typeDefs, resolvers, context: async ({ req }) => {
        const token = req.headers.authorization
        const data = {}
        if (token) {
            data.user = await verifyIdToken(token)
        }
        return data
    }
})
*/
const server = new ApolloServer(createParameters())

getDB().then(() => {
    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`)
    })
})