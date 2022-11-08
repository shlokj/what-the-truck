const express = require('express')
const router = express.Router()
const Truck = require('../models/truck')

module.exports = router


//get trucks
router.get('/', async (req, res) => {
    try {
      const trucks = await Truck.find()
      res.json(trucks)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
