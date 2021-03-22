const functions = require('firebase-functions')
const express = require('express')
const path = require('path')
const { ApolloServer, gql } = require('apollo-server-express')
require('dotenv').config()
const { createParameters } = require('./src/apolloServer')
const restRoutes = require('./src/rest')

const app = express()
app.use('/rest', restRoutes)

const server = new ApolloServer(createParameters())
server.applyMiddleware({ app, path: "/", cors: true })

exports.api = functions.https.onRequest(app)