import React, { Component } from 'react'
import AUTH_SERVICE from '../../services/auth'
import { PageHeader, Button, Layout,  Form, Input} from 'antd' 
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
      localStorage.setItem('user', JSON.stringify(response.data.user))
      this.props.history.push('/profile')
    })
      .catch((error) => {
        console.log(error)
      })
    }

  render() {
    const { Footer } = Layout
    return (
      <div>

         <PageHeader
            title="MediRecord"
            subTitle="The next step in healthcare"
            avatar={{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iSJt663UDm-lTTFdSAKHgGQwE5PZdDJGA-UK1wPAjKFhUPioZw' }}
             >
          </PageHeader>
          <h1>Login</h1>

          <Form  onSubmit={this.onSubmit} styles={{textAlign: 'center'}}>
        <Form.Item label="Correo electrónico" styles={{margin:'10vw'}} >
          <Input type="text" onChange={this.handleInput} name='email' placeholder='Ej. carlos@correo.com' />
        </Form.Item>
        <Form.Item label="Contraseña" styles={{margin:'10vw'}} >
          <Input type="password" onChange={this.handleInput} name='password' placeholder='Password' />
        </Form.Item>

        <Form.Item >
          <Button type='submit' htmlType="submit" value='Login' style={{background: '#1890ff', color:'white', fontWeight:'Bolder'}}>
            Login
          </Button>
        </Form.Item>
      </Form>

        <p>¿Aún no tienes tu cuenta?</p>
        <p>Créala aquí</p>
        <Link to="/signup"><Button type="submit" value="Signup" type="primary" style={{border:'1.5px solid #fffff ', fontWeight:'bold',}}>
                Signup
              </Button></Link>
              <br/>
        <Footer style={{ textAlign: 'center' }}>Ironhack ©2019 Created by Imanol</Footer>
      </div>
    )
  }
}