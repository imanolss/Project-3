import React, { Component } from 'react'
import {MyContext} from '../../context'
import {Link} from 'react-router-dom'
import axios from 'axios'
import MEDICINE_SERVICE from '../../services/medicines'


export default class OneMedicine extends Component {

  state = {
    oneMedicine: {},
    
  }

  componentDidMount () {
    if (!localStorage.user) return this.props.history.push('/login')
    const userInfo = localStorage.user
    const {params} = this.props.match
    axios.get(`http://localhost:3000/medicine/${params.id}`)
    //axios.get(`https://frozen-plateau-10025.herokuapp.com/recipe${params.id}`)

    .then(({ data: { oneMedicine }}) => {this.setState({ oneMedicine })
    console.log(oneMedicine)  })
    .catch((error) => console.log(error))
}

  render (){
    const { oneMedicine } = this.state;
    console.log(oneMedicine)
    return (
      <div>
         <Link to="/medicines"><button type="submit" value="Login">Medicine</button></Link>
        <br/>
        {oneMedicine.name}
        <br/>
       {oneMedicine.quantity}
       <br/>
       {oneMedicine.time}
       <br/>
       {oneMedicine.days}
       <br/>
      </div>
    )
  }

}