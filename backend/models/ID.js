const { Schema, model } = require('mongoose')

const idSchema = new Schema(
  {
    numberID: {
      type: Number,
      unique: true
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('ID', idSchema)