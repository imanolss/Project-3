const { Schema, model } = require('mongoose')

const medicineSchema = new Schema(
  {
    name: String,
    quantity: String,
    time: String,
    days: Number
  },
  {
    timestamps: true,
    versionKey: false
  }

)

module.exports = model('Medicine', medicineSchema)