const { getRaidsCollection, formatOutput, getObjectID } = require('../mongo')
const _ = require('lodash')

const getRaids = async () => {
    const collection = await getRaidsCollection()
    const results = await collection.find({}).map(formatOutput).toArray()
    return _.sortBy(results, 'date')
}

module.exports = getRaids