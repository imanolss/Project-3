import React, { Component } from 'react'
import {MyContext} from '../../context'
import {Link} from 'react-router-dom'
import axios from 'axios'
import MEDICINE_SERVICE from '../../services/medicines'
import { PageHeader, Button, Layout,  Form, Input} from 'antd'


export default class OneMedicine extends Component {

  state = {
    oneMedicine: {},
    
  }

  componentDidMount () {
    if (!localStorage.user) return this.props.history.push('/login')
    const userInfo = localStorage.user
    const {params} = this.props.match
    axios.get(`https://vast-sierra-07180.herokuapp.com/medicine/${params.id}`)
    //axios.get(`https://frozen-plateau-10025.herokuapp.com/recipe${params.id}`)

    .then(({ data: { oneMedicine }}) => {this.setState({ oneMedicine })
    console.log(oneMedicine)  })
    .catch((error) => console.log(error))
}

  render (){
   
    const { Footer } = Layout
    const { oneMedicine } = this.state;
    console.log(oneMedicine)
    return (
      <div>
         <PageHeader
            title="MediRecord"
            subTitle="The next step in healthcare"
            avatar={{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iSJt663UDm-lTTFdSAKHgGQwE5PZdDJGA-UK1wPAjKFhUPioZw' }}
             >
          </PageHeader>
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
       <Footer style={{ textAlign: 'center' }}>Ironhack ©2019 Created by Imanol</Footer>
      </div>
    )
  }

}