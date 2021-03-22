const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const fs = require('fs')
require('dotenv').config()
const resolvers = require('./resolvers')
const { createParameters } = require('./apolloServer')
const { getDB } = require('./data/mongo')
const restRoutes = require('./rest')
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
// const server = new ApolloServer(createParameters())
const app = express()

app.use('/rest', restRoutes)

const server = new ApolloServer(createParameters())
server.applyMiddleware({ app, path: "/", cors: true })


getDB().then(() => {
    app.listen({ port: 4000 }, () => {
        console.log('Server ready at localhost:4000')
    })
    // server.listen().then(({ url }) => {
    // console.log(`🚀 Server ready at ${url}`)
    // })
})