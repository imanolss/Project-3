const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true
    },
    primerNombre: {
      type: String,
      required: true
    },
    segundoNombre: {
      type: String,
      required: true
    },
    primerApellido: {
      type: String,
      required: true
    },
    segundoApellido: {
      type: String,
      required: true
    },
    birthday: {
      type: Date,
      required: true
    },
    sex: {
      type: String,
     // required: true,
      enum: ['Male', 'Female']
    },
    allergies: {
      type: String
    },
    beneficiary: String,
    pathologyAntecedents: String,
    height: Number,
    weight: Number,
    medicalDevices: String,
    surgicalIntervention: String,
    nationality: String,
    location: {
      address: String,
      city: String,
      state: String,
      postalCode: Number,
      country: String
    },
    recipe: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe' 
    }],
    medicine: [{
      type: Schema.Types.ObjectId,
      ref: 'Medicine' 
     }],
    role: {
      type: String,
      enum: ['PATIENT', 'DOCTOR', 'BUYER'],
      default: 'PATIENT'
    },
    //----------information for doctors
    professionalID: {
      type: Schema.Types.ObjectId,
      ref: 'ID'
    },
    speciality: 'String',
    //----------information for sellers
    store: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)
