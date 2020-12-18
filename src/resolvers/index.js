const packageJSON = require('../../package.json')
const saveRaid = require('../data/raids/saveRaid')
const loadRaid = require('../data/raids/loadRaid')
const resolvers = {
    Query: {
        version() {
            return packageJSON.version
        },
        getRaid(root, { id }) {
            return loadRaid(id)
        },
    },
    Mutation: {
        saveRaid(root, { raid }) {
            return saveRaid(raid)
        }
    }
}

module.exports = resolvers