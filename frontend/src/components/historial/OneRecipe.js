import React, { Component } from 'react'
import {MyContext} from '../../context'
import {Link} from 'react-router-dom'
import axios from 'axios'
import My_Service from '../../services/recipes'


export default class OneRecipe extends Component {

  state = {
    oneRecipe: {},
    
  }

  componentDidMount () {
    if (!localStorage.user) return this.props.history.push('/login')
    const userInfo = localStorage.user
    const {params} = this.props.match
    axios.get(`http://localhost:3000/recipe/${params.id}`)
    //axios.get(`https://frozen-plateau-10025.herokuapp.com/recipe${params.id}`)

    .then(({ data: { oneRecipe }}) => {this.setState({ oneRecipe })
    console.log(oneRecipe)  })
    .catch((error) => console.log(error))
}

  render (){
    const { oneRecipe } = this.state;
    console.log(oneRecipe)
    return (
      <div>
         <Link to="/recipes"><button type="submit" value="Login">Recipes</button></Link>
        <br/>
        {oneRecipe.date}
        <br/>
       {oneRecipe.agent}
       <br/>
       {oneRecipe.observations}
       <br/>
       {oneRecipe.institution}
       <br/>
      </div>
    )
  }

}
