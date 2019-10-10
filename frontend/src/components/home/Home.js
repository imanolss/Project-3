import React, { Component } from 'react'
import {MyContext} from '../../context'

import {Link} from 'react-router-dom'


export default class Home extends Component {
  render() {
    return (
      <div>
        
        <div>
          HOME
        </div>
        <div>
        <Link to="/signup"><button type="submit" value="Signup">SignUp</button></Link>
        </div>
        <div>
          <p>You are a health professional? Don't wait more and start using the app</p>
          <Link to="/drsignup"><button type="submit" value="Signup">SignUp</button></Link>
        </div>
        <div>
          <p>Get into your account</p>
        <Link to="/login"><button type="submit" value="Login">Log-In</button></Link>
        </div>
      </div>
    )
  }
}

Home.contextType = MyContext;