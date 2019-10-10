import  React, {Component} from 'react'
import AUTH_SERVICE from '../../services/auth'
import { PageHeader, Button, Layout,  Form, Input} from 'antd' 

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
    const { Footer } = Layout
    return (
      <>

          <PageHeader
            title="MediRecord"
            subTitle="The next step in healthcare"
            avatar={{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iSJt663UDm-lTTFdSAKHgGQwE5PZdDJGA-UK1wPAjKFhUPioZw' }}
             >
          </PageHeader>

      <h1>Professional Sign up</h1>
      <Form  onSubmit={this.onSubmit} styles={{textAlign: 'center'}}>
        <Form.Item label="Correo electrónico" styles={{margin:'10vw'}} >
          <Input onChange={this.handleInput} required type='email' name='email' placeholder='Ej. carlos@correo.com' />
        </Form.Item>
        <Form.Item label="Contraseña" styles={{margin:'10vw'}} >
          <Input onChange={this.handleInput} required type='password' name='password' placeholder='Password' />
        </Form.Item>
        <Form.Item label="Primer Nombre" styles={{margin:'10vw'}} >
          <Input onChange={this.handleInput} required type='text' name='primerNombre' placeholder='Ej. Carlos' />
        </Form.Item>
        <Form.Item label="Segundo Nombre" styles={{margin:'10vw'}} >
          <Input onChange={this.handleInput} required type='text' name='segundoNombre' placeholder='Ej. Luís' />
        </Form.Item>
        <Form.Item label="Primer Apellido" styles={{margin:'10vw'}} >
          <Input onChange={this.handleInput} required type='text' name='primerApellido' placeholder='Ej. Jiménez' />
        </Form.Item>
        <Form.Item label="Segundo Apellido" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} required type='text' name='segundoApellido' placeholder='Ej. Morán' />
        </Form.Item>
        <Form.Item label="Fecha de nacimiento" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} type='date' name='birthday' />
        </Form.Item>
        <Form.Item label="Cédula profesional" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} type='numer' name='professionalID' placeholder='52893456'/>
        </Form.Item>
        <Form.Item label="Especialidad (si cuenta con alguna)" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} type='text' name='speciality' placeholder='Ej. Cardiólogía, Neurología'/>
        </Form.Item>
        <Form.Item label="Sexo" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} name='sex' required placeholder='Ej. Male / Female'/>
        </Form.Item>
        <Form.Item label="Alergias" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} type='text' name='allergies' placeholder='Ej. Polen, polvo, etc'/>
        </Form.Item>
        <Form.Item label="Seguro médico púbico/privado" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} type='text' name='beneficiary' placeholder='Ej. IMSS, ISSSTE, Monterrey, GNP'/>
        </Form.Item>
        <Form.Item label="Antecedentes familiares" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} type='text' name='pathologyAntecedents' placeholder='Ej. Diabétes, cáncer, etc.'/>
        </Form.Item>
        <Form.Item label="Estatura (número sin unidades)" styles={{margin:'10vw'}} >
          <Input onChange={this.handleInput}  name='height' placeholder='Ej. 1.76'/>
        </Form.Item>
        <Form.Item label="Peso (número sin unidades)" styles={{margin:'10vw'}} >
          <Input onChange={this.handleInput}  name='weight' placeholder='Ej. 68'/>
        </Form.Item>
        <Form.Item label="Aparatos/dispositivos médicos" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} type='text' name='medicalDevices' placeholder='Ej. marcapasos'/>
        </Form.Item>
        <Form.Item label="Intervenciones quirúrgicas anteriores" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} type='text' name='surgicalIntervention' placeholder='Ej. extracción del apéndice, tabique, etc.'/>
        </Form.Item>
        <Form.Item label="Nacionalidad" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} type='text' name='nationality' placeholder='Ej. Mexicana'/>
        </Form.Item>
        <p>Dirección actual</p>
        <Form.Item label="Calle, número y colonia" styles={{margin:'10vw'}} >
          <Input   onChange={this.handleInput} type='text' name='address' placeholder='Ej. San Jacinto 38, col. Poetas'/>
        </Form.Item>
        <Form.Item label="Ciudad" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} type='text' name='city' placeholder='Ej.CDMX'/>
        </Form.Item>
        <Form.Item label="Estado" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} type='text' name='state' placeholder='Ej.Ciudad de Méxcio'/>
        </Form.Item>
        <Form.Item label="Código Postal" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} type='number' name='postalCode' placeholder='Ej.01800'/>
        </Form.Item>
        <Form.Item label="País" styles={{margin:'10vw'}} >
          <Input  onChange={this.handleInput} type='text' name='country' placeholder='Ej. México'/>
        </Form.Item>



        <Form.Item >
          <Button htmlType="submit" type='submit' style={{background: '#1890ff', color:'white', fontWeight:'Bolder'}}>
            Registro
          </Button>
        </Form.Item>
      </Form>
    

      <Footer style={{ textAlign: 'center' }}>Ironhack ©2019 Created by Imanol</Footer>
      </>
    )
  }

}

export default Signup