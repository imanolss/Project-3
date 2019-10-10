import React, { Component } from 'react'
import AUTH_SERVICE from '../../services/auth'
import { MyContext } from '../../context/index'
import {Link} from 'react-router-dom'

export default class Login extends Component {

  state = {
    user:{}
  }

  handleInput = (e) => {
    const {user} = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
   }

   onSubmit = (e) => {
     e.preventDefault()
     AUTH_SERVICE.login(this.state.user)
     .then((response) => {
      //this.context.logUser= response.data.user
      //console.log(response.data.user)  
      localStorage.setItem('user', JSON.stringify(response.data.user))
      this.props.history.push('/profile')
    })
      .catch((error) => {
        console.log(error)
      })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="">correo</label>
          <input type="text" onChange={this.handleInput} name='email' placeholder='correo'  />
          <br/>
          <label htmlFor="">password</label>
          <input type="password" onChange={this.handleInput} name='password' placeholder='Password'/>
          <br/>
          <input type="submit" value='Login' />
        </form>

        <p>Create your account here</p>
        <Link to="/signup"> <button  type="submit" value="submit">Signup</button> </Link>
      </div>
    )
  }
}

//Login.contextType = MyContext