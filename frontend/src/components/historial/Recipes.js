import React, { Component } from 'react'
import {MyContext} from '../../context'
import {Link} from 'react-router-dom'
import axios from 'axios'
import MY_SERVICE from '../../services/recipes'
import { PageHeader, Button, Layout,  Form, Input} from 'antd'

export default class Historial extends Component {

  state = {
    allrecipes: []
  }

  componentDidMount () {
    if (!localStorage.user) return this.props.history.push('/login')
    const userInfo = localStorage.user

    MY_SERVICE.all()
     .then(response => {
       this.setState({allrecipes : response.data.receta})
       console.log(response.data.receta)
      })
     .catch(error => this.setState({ error, isLoading: false }))
  }

  delete = async (id, index) => {
  let{allrecipes} = this.state
  await MY_SERVICE.delete(id)
  allrecipes.splice(index, 1)
  this.setState({allrecipes})
}

  editRecipe = (id) => {
    this.props.history.push(`/recipe/edit/${id}`)
  }

  oneRecipe = (id) => {
    this.props.history.push(`/recipe/${id}`)
  }

  render() {
    const { Footer } = Layout

    const {allrecipes} = this.state

    return (
      <div>
        <PageHeader
            title="MediRecord"
            subTitle="The next step in healthcare"
            avatar={{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iSJt663UDm-lTTFdSAKHgGQwE5PZdDJGA-UK1wPAjKFhUPioZw' }}
             >
          </PageHeader>
        <br/>
         <div>
         
       <h3> Historial médico</h3>
        </div>
        <br/>
        <Link to="/recipe/create"><button type="submit" value="Login">create</button></Link>
          <br/>

          <br/>
        <Link to="/profile"><button type="submit" value="Login">Profile</button></Link>
        <br/>

       <div> 
         {allrecipes.map((recipe, i) => {
           const {date, observations, agent, institution} = recipe
           return (
             <div key={i}>
               <p>{agent}</p>
               <p>{date}</p>
               <button type='delete' key="delete" id={recipe.id} onClick={() =>this.delete(recipe._id, i)} >Delete</button>
               <button type='submit' key="singleview" onClick={() =>this.oneRecipe(recipe._id)} >Más información</button>
               <button type='edit' key="edit" onClick={() =>this.editRecipe(recipe._id)} >Edit</button>
             </div>
           )
           })}
       </div>
      
       <Footer style={{ textAlign: 'center' }}>Ironhack ©2019 Created by Imanol</Footer>
      </div>
    )
  }
}

