const router = require('express').Router()
const Recipe = require('../models/Recipe')
const User = require('../models/User')
const passport = require('../config/passport')

router.post('/recipe', async (req, res, next)=>{
  try {
    const { date, agent, observations, institution } = req.body
    const newRecipe = {
      date,
      agent,
      observations,
      institution
    }
    const currentUser = req.user
    console.log(req.user)
    const userRecipe = await Recipe.create(newRecipe)
    await User.findByIdAndUpdate(currentUser._id, { $push: { recipe: userRecipe } })
    res.status(201).json({ newRecipe })
  } catch (error) {
    console.log(error)
  }
})

router.get('/recipes', async (req, res , next)=>{
  const user = await User.findById(req.user).populate('recipe')
  console.log('-----------------------------', req.user)
  const receta = user.recipe
  res.status(200).json({receta})
})

router.get('/recipe/:id', async (req, res, next) => {
  const oneRecipe = await Recipe.findById(req.params.id)
  console.log(oneRecipe)
  res.status(200).json({ oneRecipe })
})

router.put('/recipe/:id', async (req, res, next) => {
  const updateRecipe = await Recipe.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
  console.log(updateRecipe)
  res.status(200).json({ updateRecipe })
})

router.delete('/recipe/:id', async (req, res, next) => {
  const deleteRecipe = await Recipe.findByIdAndDelete(req.params.id)
  console.log(deleteRecipe)
  res.status(200).json({ deleteRecipe })
})



module.exports = router
