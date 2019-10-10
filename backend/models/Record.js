const { Schema, model } = require('mongoose')

const recordSchema = new Schema(
  {
    disease: {
      type: String,
      required: true
    },
    date: Date,
    agent: {
      type: String,
      required: true
    },
    observations: String,
    recipe: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    }
    ],
    patient: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }

)

module.exports = model('Record', recordSchema)