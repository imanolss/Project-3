import  React, {Component} from 'react'
import PropTypes from 'prop-types'
import AUTH_SERVICE from '../../services/auth'

class Signup extends Component {

  state = {
    user: {
      role: 'DOCTOR'
    }
  }

  handleInput = (e) => {
    const {user} = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState ({ user })
  }

  onSubmit = (e) => {
    e.preventDefault()
    AUTH_SERVICE.signup(this.state.user)

      .then((response)=> {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      this.props.history.push('/')
  }

  render() {
    return (
      <>
      <h1>Sign up</h1>
      <br/>
      <form onSubmit={this.onSubmit}>
      <label>email</label>
        <input onChange={this.handleInput} required type='email' name='email' placeholder='email'/>
        <br/>
        <label>Contraseña</label>
        <input onChange={this.handleInput} required type='password' name='password' placeholder='Password'/>
        <br/>
        <label>Primer Nombre</label>
        <input onChange={this.handleInput} required type='text' name='primerNombre' placeholder='Primer Nombre'/>
        <br/>
        <label>Segundo Nombre</label>
        <input onChange={this.handleInput} required type='text' name='segundoNombre' placeholder='Segundo Nombre'/>
        <br/>
        <label>Primer Apellido</label>
        <input onChange={this.handleInput} required type='text' name='primerApellido' placeholder='Primer Apellido'/>
        <br/>
        <label>Segundo Apellido</label>
        <input onChange={this.handleInput} required type='text' name='segundoApellido' placeholder='Segundo Apellido'/>
        <br/>
        <label required>Fecha de Nacimiento</label>
        <input onChange={this.handleInput} type='date' name='birthday' required/>
        <br/>
        <label>Sexo</label>
        <select onChange={this.handleInput} name='sex' required>
          <option value="">Escoja uno</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
        </select>
        <br/>
        <br/>
        Eres dr
        <br/>
        <br/>
        <label>Alergias</label>
        <input onChange={this.handleInput} type='text' name='allergies' placeholder='allergies'/>
        <br/>
        <label>Beneficiario</label>
        <input onChange={this.handleInput} type='text' name='beneficiary' placeholder='Beneficiario'/>
        <br/>
        <label>antecedentes Patológicos</label>
        <input onChange={this.handleInput} type='text' name='pathologyAntecedents' placeholder='Antecedentes'/>
        <br/>
        <label>Estatura</label>
        <input onChange={this.handleInput}  name='height'/>
        <br/>
        <label>Peso</label>
        <input onChange={this.handleInput}  name='weight'/>
        <br/>
        <label>Aparatos médicos</label>
        <input onChange={this.handleInput} type='text' name='medicalDevices' placeholder='Aparatos médicos'/>
        <br/>
        <label>Intervenciones quirúrgicas</label>
        <input onChange={this.handleInput} type='text' name='surgicalIntervention' placeholder='operaciones'/>
        <br/>
        <label>Nacionalidad</label>
        <input onChange={this.handleInput} type='text' name='nationality' placeholder='Nacionalidad'/>
        <br/>
        <label>Dirección actual</label>
        <input onChange={this.handleInput} type='text' name='address' placeholder='dirección'/>
        <br/>
        <input onChange={this.handleInput} type='text' name='city' placeholder='Ciudad'/>
        <br/>
        <input onChange={this.handleInput} type='text' name='state' placeholder='Estado'/>
        <br/>
        <input onChange={this.handleInput} type='number' name='postalCode' placeholder='Código postal'/>
        <br/>
        <input onChange={this.handleInput} type='text' name='country' placeholder='País'/>
        <br/>
        <br/>
        <button type='submit'>singup</button>
      </form>
      </>
    )
  }

}

export default Signup