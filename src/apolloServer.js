const { ApolloServer, gql } = require('apollo-server')
const fs = require('fs')
const path = require('path')
require('dotenv').config()
const resolvers = require('./resolvers')

const createParameters = () => {
    const typeDefs = gql`${fs.readFileSync(path.join(__dirname, './schema.graphqls'), 'utf8')}`
    return {
        typeDefs, resolvers, context: async ({ req }) => {
            const token = req.headers.authorization
            const data = {}
            // if (token) {
            //     data.user = await verifyIdToken(token)
            // }
            // console.log('user: ', data.user)
            return data
        }
    }
}

module.exports = { createParameters }