import React, { Component } from 'react'
import { MyContext} from '../../context/index'
import { PageHeader, Button, Carousel, Card, Layout, Tag} from 'antd'
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
    const { Footer } = Layout
    const { user} = this.state
    
    return (
      <div>

      <PageHeader
            title="MediRecord"
            subTitle="The next step in healthcare"
            tags={<Tag>Bienvenido: {JSON.parse(localStorage.user).primerNombre}</Tag>}
            extra={[
              <Link to="/edit"><Button  type="submit" value="Historial" type="primary" style={{border:'1px solid #fffff ', fontWeight:'bold',}}>
                Editar
              </Button></Link>,
              <Link to="/recipes"><Button  value="Historial" style={{border:'1px solid #1890ff', color:'#1890ff'}}>Historial</Button></Link>,
              <Link to="/medicines"><Button style={{border:'1px solid #1890ff', color:'#1890ff'}}>Receta</Button></Link>,
              
            <Button type='danger' onClick={this.logout} style={{border:'1.5px solid #fffff ', fontWeight:'bold',}}>
            Salir
          </Button>
            ]}
            avatar={{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iSJt663UDm-lTTFdSAKHgGQwE5PZdDJGA-UK1wPAjKFhUPioZw' }}
             >
          </PageHeader>


        <div>
       
        <h2>Datos del paciente:</h2>
        <p>Nombre: {JSON.parse(localStorage.user).primerNombre} {JSON.parse(localStorage.user).segundoNombre}</p>
        <p>Apellidos: {JSON.parse(localStorage.user).primerApellido} {JSON.parse(localStorage.user).segundoApellido}</p>
        <p>Fecha de nacimiento: {JSON.parse(localStorage.user).birthday}</p>
        <p>Sexo: {JSON.parse(localStorage.user).sex}</p>
        <p>Alergías: {JSON.parse(localStorage.user).allergies}</p>
        <p>Antecedentes familaires: {JSON.parse(localStorage.user).pathologyAntecedents}</p>
        <p>Estatura: {JSON.parse(localStorage.user).height} m</p>
        <p>Peso: {JSON.parse(localStorage.user).weight} kg</p>
        <p>Aparatos/dispositivos médicos: {JSON.parse(localStorage.user).medicalDevices}</p>
        <p>Intervenciones quirúrgicas anteriores: {JSON.parse(localStorage.user).surgicalIntervention}</p>
        <p>Nacionalidad: {JSON.parse(localStorage.user).nationality}</p>
        <br/>
        <h3>Dirección</h3>
        <br/>
        <p>Calle, número y colonia: {JSON.parse(localStorage.user).address}</p>
        <p>Ciudad: {JSON.parse(localStorage.user).city}</p>
        <p>Estado: {JSON.parse(localStorage.user).state}</p>
        <p>Código Postal: {JSON.parse(localStorage.user).postalCode}</p>
        <p>País: {JSON.parse(localStorage.user).country}</p>
        </div>

        <Footer style={{ textAlign: 'center' }}>Ironhack ©2019 Created by Imanol</Footer>
      </div>
    )
  }
}
