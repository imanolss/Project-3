import React, { Component } from 'react'
import {MyContext} from '../../context'
import {Link} from 'react-router-dom'
import axios from 'axios'
import My_Service from '../../services/recipes'
import { PageHeader, Button, Layout,  Form, Input} from 'antd'


export default class OneRecipe extends Component {

  state = {
    oneRecipe: {},
    
  }

  componentDidMount () {
    if (!localStorage.user) return this.props.history.push('/login')
    const userInfo = localStorage.user
    const {params} = this.props.match
    axios.get(`https://mysterious-mesa-15778.herokuapp.com/recipe/${params.id}`)
    //axios.get(`https://frozen-plateau-10025.herokuapp.com/recipe${params.id}`)

    .then(({ data: { oneRecipe }}) => {this.setState({ oneRecipe })
    console.log(oneRecipe)  })
    .catch((error) => console.log(error))
}

  render (){
    const { oneRecipe } = this.state;
    const { Footer } = Layout
    
    return (
      <div>
          <PageHeader
            title="MediRecord"
            subTitle="The next step in healthcare"
            avatar={{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iSJt663UDm-lTTFdSAKHgGQwE5PZdDJGA-UK1wPAjKFhUPioZw' }}
             >
          </PageHeader>
         <Link to="/recipes"><button type="submit" value="Login">Recipes</button></Link>
        <br/>
        <p>Fecha de la revisión:</p>
        {oneRecipe.date}
        <br/>
        <p>Agente biológico, físico o químico:</p>
       {oneRecipe.agent}
       <br/>
       <p>Observaciones:</p>
       {oneRecipe.observations}
       <br/>
       <p>Institución:</p>
       {oneRecipe.institution}
       <br/>
       <Footer style={{ textAlign: 'center' }}>Ironhack ©2019 Created by Imanol</Footer>
      </div>
    )
  }

}
