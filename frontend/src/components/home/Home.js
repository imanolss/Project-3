import React, { Component } from 'react'
import {MyContext} from '../../context'
import { PageHeader, Button, Carousel, Card, Layout} from 'antd' 
import {Link} from 'react-router-dom'


export default class Home extends Component {
 
  render() {
    const { Footer } = Layout
    return (
      
      <div>
           <PageHeader
            title="MediRecord"
            subTitle="The next step in healthcare"
            extra={[
              <Link to="/login"><Button style={{border:'1.5px solid #1890ff', color:'#1890ff'}}>Login</Button></Link>,
              <Link to="/signup"><Button type="submit" value="Signup" type="primary" style={{border:'1.5px solid #fffff ', fontWeight:'bold',}}>
                Signup
              </Button></Link>
            ]}
            avatar={{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iSJt663UDm-lTTFdSAKHgGQwE5PZdDJGA-UK1wPAjKFhUPioZw' }}
             >
          </PageHeader>

          <Carousel autoplay>
            <div  className="ja">
              <h3 style={{fontStretch:'normal', fontWeight:'bolder' }}>Ten tu historial siempre contigo</h3>
            </div>
            <div className="je">
              <h3 style={{fontStretch:'normal', fontWeight:'bolder' }}>Evita que tu información se disperse </h3>
            </div>
            <div className="ji">
              <h3 style={{fontStretch:'normal', fontWeight:'bolder' }}>Deja a un lado el papeleo excesivo</h3>
            </div>
          </Carousel>

          
            <Card title="¿Eres un profesional de la salud?" bordered={false} style={{ width: '100vw' }}>
              <p style={{display: 'flex', fontSize:'1.3em'}}>Forma parte del movimiento de digitalización del sector salud.</p>
              <p style={{display: 'flex', fontSize:'1em'}}>¡Registrate, ya! Muy pronto tendremos novedades para ti.</p>
              <Link to="/drsignup"><Button type="submit" value="Signup" type="primary" style={{border:'1.5px solid #244b57 ', fontWeight:'bold',background:'#244b57'}}>
                Signup
              </Button></Link>
            </Card>
            <Footer style={{ textAlign: 'center' }}>Ironhack ©2019 Created by Imanol</Footer>
      </div>
    )
  }
}

Home.contextType = MyContext;