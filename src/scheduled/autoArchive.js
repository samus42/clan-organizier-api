const autoArchiveActivities = require("../data/activities/autoArchiveActivities")
const autoArchiveRaids = require("../data/raids/autoArchiveRaids")

const autoArchive = async (context) => {
    try {
        console.log('Starting autoarchiving process!')
        const [activites, raids] = await Promise.all([autoArchiveActivities(), autoArchiveRaids()])
        console.log('Autoarchiving complete')
        console.log(JSON.stringify(activites))
        console.log(JSON.stringify(raids))
    } catch (err) {
        console.error('Error autoarchving: ', err)
    }
}

module.exports = autoArchive