const _ = require('lodash')
const { getRaidsCollection, getObjectID, formatOutput } = require('../mongo')

const saveRaid = async (raid) => {
    console.log('saving: ', raid)
    const collection = await getRaidsCollection()

    if (raid.id) {
        const existing = await collection.findOne({ _id: getObjectID(raid.id) })
        if (!existing) {
            throw new Error(`No raid with id ${raid.id} exists!`)
        }
        await collection.updateOne({ _id: getObjectID(raid.id) }, { $set: _.omit(raid, ['id']) })
        return raid
    } else {
        const result = await collection.insertOne({ ...raid, active: true })
        return { id: result.insertedId.toString(), ...raid }
    }
}

module.exports = saveRaid