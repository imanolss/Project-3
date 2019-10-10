import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound';
import Signup from './components/home/Signup'
import Profile from './components/home/Profile'
import Login from './components/home/Login'
import DrSignup from './components/home/DrSignup'
import Recipes from './components/historial/Recipes'
import RecipeForm from './components/historial/RecipeForm'
import OneRecipe from './components/historial/OneRecipe'
import Edit from './components/home/Edit'
import Medicines from './components/medicines/Medicines'
import MedicineForm from './components/medicines/MedicineForm'
import OneMedicine from './components/medicines/OneMedicine'

const Router = () => (
  <BrowserRouter>
    <Switch>
      
      <Route exact path="/" component={Home} />
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/login' component={Login} />
      <Route exact path='/profile' component={Profile}/>
      <Route exact path='/drsignup' component={DrSignup}/>
      <Route exact path='/edit' component={Edit}/>

      <Route exact path='/recipes' component={Recipes}/>
      <Route exact path='/recipe/create' component={RecipeForm}/>
      <Route exat path='/recipe/edit/:id' component={RecipeForm}/>
      <Route exact path='/recipe/:id' component={OneRecipe}/>
      
      <Route exact path='/medicines' component={Medicines}></Route>
      <Route exact path='/medicine/create' component={MedicineForm}></Route>
      <Route exact path='/medicine/edit/:id' component={MedicineForm}></Route>
      <Route exact path='/medicine/:id' component={OneMedicine}></Route>

      <Route component={NotFound} />

    </Switch>
  </BrowserRouter>
);
export default Router;
