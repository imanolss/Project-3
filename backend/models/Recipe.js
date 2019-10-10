const { Schema, model } = require('mongoose')

const recipeSchema = new Schema(
  {
    date: String,
    agent: {
      type: String,
     // required: true
    },
    observations: String,
    medicine: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Medicine'
    }
    ],
    patient: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    analysis: [
      {
        name: String,
        image: {
          type: String
        }
      }
    ],
    institution: String
  },
  {
    timestamps: true,
    versionKey: false
  }

)

module.exports = model('Recipe', recipeSchema)