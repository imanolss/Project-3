import React from 'react'
import {Link} from 'react-router-dom'
import AUTH_SERVICE from '../../services/auth'
import {MyContext} from '../../context/index'

export default class ProfileEdit extends React.Component{
  state = {
    updateUser: {}
  }

  componentDidMount (){
    if (localStorage.user){
      let updateUser = JSON.parse(localStorage.user)
      this.setState({updateUser})
    }
  }

  handleInput = (e) => {
    const {updateUser} = this.state
   const key = e.target.name
   updateUser [key] = e.target.value
   this.setState({updateUser})
  }

  onSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData()
    for (const key in this.state.updateUser){fd.append(key, this.state.updateUser[key])}
    AUTH_SERVICE.edit(fd)
    .then(res =>{
      console.log(res)
      localStorage.user = JSON.stringify(res.data.user)
      this.props.history.push('/login')
    })
    .catch(e => console.log(e))
  }

  render(){
    
    return(
      <div>
        <h1>Edit Profile</h1>
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
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
        </select>
        <br/>
        <br/>
        Los siguientes campos podras agregarlos después
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
        <button type='button' onClick={this.onSubmit} >Confirma tus cambios</button>
      </form>
      </div>
    )

  }

}