const express = require('express')
const router = express.Router()
const packageJSON = require('../../package.json')
const autoArchiveRaids = require('../data/raids/autoArchiveRaids')

const { allEventsHandler } = require('./calendar')

router.get('/test', async (req, res) => {
    // const raids = await autoArchiveRaids()
    // res.json({ raids })
    res.json({ msg: 'hi' })
})

router.get('/info', (req, res) => {
    res.json({ version: packageJSON.version })
})
router.get('/calendar', allEventsHandler)

module.exports = router