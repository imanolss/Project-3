import React, { Component } from 'react'
import { MyContext} from '../../context/index'
import {Link} from 'react-router-dom'


export default class Profile extends Component {

  state = {
    user: { }
  }

  componentDidMount(){
    if (!localStorage.user) return this.props.history.push('/login')
    const userInfo = localStorage.user
    this.setState({ user: userInfo})
    console.log(localStorage.user)
  }

  logout(){
    localStorage.clear()
    window.location.href = '/'
  }


  render() {
    const { user} = this.state
    return (
      <div>
        <div>
        <p>Bienvenido: {JSON.parse(localStorage.user).primerNombre}</p>
        <p>Datos del paciente:</p>
        <p>Apellido paterno: {JSON.parse(localStorage.user).primerApellido}</p>
        <Link to="/recipes"><button type="primary" value="Historial">Historial</button></Link>
        <Link to="/medicines"><button type="primary" value="Historial">Medicamentos</button></Link>
        <Link to="/edit"><button type="submit" value="Historial">Editar perfil</button></Link>
        </div>
        <div>
          <button type='danger' onClick={this.logout}>Log out</button>
        </div>
      </div>
    )
  }
}
