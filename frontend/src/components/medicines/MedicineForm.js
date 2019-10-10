import React, {Component} from 'react'
import axios from 'axios'
import MEDICINE_SERVICE from '../../services/medicines'
import {Link} from 'react-router-dom'


class MedicineForm extends Component {

  state = {
   medicine: {
    name: '',
    quantity: '',
    time: '',
    days: ''
    },
    form: {
      title: '',
      button: '',
      endpoint: ''
    }
  }

 componentDidMount() {
  if (!localStorage.user) return this.props.history.push('/login')
  const userInfo = localStorage.user

    const { params } = this.props.match
    if (params.id) {
      axios.get(`http://localhost:3000/medicine/${params.id}`)

      //-----------------------------------------------------------

      .then(({ data: { oneMedicine }}) => {this.setState({ oneMedicine })
    console.log(oneMedicine)  
    })
      this.setState({ form: { title: 'Edit', button: 'Edit', endpoint: `/medicine/${params.id}` } })
      
    } else {

      this.setState({ form: { title: 'Create', button: 'Create', endpoint: '/medicine' } })
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { medicine, form } = this.state;
    if (form.title === 'Edit') {
      axios.put(`http://localhost:3000${form.endpoint}`, medicine)

      //axios.put(`https://frozen-plateau-10025.herokuapp.com${form.endpoint}`, recipe)

      .then(({ data }) => {
        console.log(data);
        this.setState({
          medicine: {
            name: '',
            quantity: '',
            time: '',
            days: ''
          }
        });
        this.props.history.push('/medicines')
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
    //axios.post('http://localhost:3000/recipe', recipe)
      
    MEDICINE_SERVICE.create(this.state.medicine)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          medicine: {
            name: '',
            quantity: '',
            time: '',
            days: ''
          }
        });
        this.props.history.push('/medicines')
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  handleInputs = (e) => {
    const { medicine } = this.state;
    const key = e.target.name;
    medicine[key] = e.target.value;
    this.setState({ medicine });
  };

  render() {
    const { medicine, form } = this.state;
    console.log(this.props)
    return (
      <div>
         
        <h1  style={{ width: '50vw' }}>{form.title}</h1>
        <form action="" onSubmit={this.onSubmit}>
          <input type="text"  onChange={this.handleInputs} name="name" placeholder="Nombre del medicamento"/>
          <input type="text"  name='quantity' onChange={this.handleInputs} placeholder='cantidad' />
          <input type="text"  name='time' onChange={this.handleInputs}  placeholder='tiempo a consumir' />
          <input type="number" name='days' onChange={this.handleInputs} />
          <br/>
          <br/>
          <button type='submit' value={form.button}>{form.button}</button>
        </form>
        <Link to="/medicines"><button type="submit" value="Login">Cancel</button></Link>
      </div>
    );
  }
}

export default MedicineForm;