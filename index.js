const functions = require('firebase-functions')
const express = require('express')
const path = require('path')
const { ApolloServer, gql } = require('apollo-server-express')
require('dotenv').config()
const { createParameters } = require('./src/apolloServer')
const restRoutes = require('./src/rest')
const getRaids = require('./src/data/raids/getRaids')
const app = express()
app.use('/rest', restRoutes)

const server = new ApolloServer(createParameters())
server.applyMiddleware({ app, path: "/", cors: true })

exports.api = functions.https.onRequest(app)

// exports.scheduledFunction = functions.pubsub.schedule('every 1 minutes').onRun(async (context) => {
//     console.log('This will be run every 1 minutes!');
//     // getRaids().then((raids) => console.log(`found ${raids.length} raids`)).catch((err) => console.error('Scheduled function caught: ', err))
//     const raids = await getRaids()
//     console.log(`found ${raids.length} raids with await`)
//     return null;
// });
