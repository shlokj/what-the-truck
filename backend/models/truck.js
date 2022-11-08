const mongoose = require('mongoose')

const truckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Truck',truckSchema)