const router = require('express').Router()
const Medicine = require('../models/Medicine')
const User = require('../models/User')
const passport = require('../config/passport')

router.post('/medicine', async (req, res, next)=>{
  try {
    const { name, quantity, time, days } = req.body
    const newMedicine = {
      name,
      quantity,
      time,
      days 
    }
    const currentUser = req.user
    console.log(req.user)
    const userMedicine = await Medicine.create(newMedicine)
    await User.findByIdAndUpdate(currentUser._id, { $push: { medicine: userMedicine } })
    res.status(201).json({ newMedicine })
  } catch (error) {
    console.log(error)
  }
})

router.get('/medicines', async (req, res , next)=>{
  const user = await User.findById(req.user).populate('medicine')
  console.log('-----------------------------', req.user)
  const medicina = user.medicine
  res.status(200).json({medicina})
})

router.get('/medicine/:id', async (req, res, next) => {
  const oneMedicine = await Medicine.findById(req.params.id)
  console.log(oneMedicine)
  res.status(200).json({ oneMedicine })
})

router.put('/medicine/:id', async (req, res, next) => {
  const updateMedicine = await Medicine.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
  console.log(updateMedicine)
  res.status(200).json({ updateMedicine })
})

router.delete('/medicine/:id', async (req, res, next) => {
  const deleteMedicine = await Medicine.findByIdAndDelete(req.params.id)
  console.log(deleteMedicine)
  res.status(200).json({ deleteMedicine })
})



module.exports = router
