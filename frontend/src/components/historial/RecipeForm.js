import React, {Component} from 'react'
import axios from 'axios'
import MY_SERVICE from '../../services/recipes'
import {Link} from 'react-router-dom'


class RecipeForm extends Component {

  state = {
      recipe:{
      date: '',
      observations: '',
      medicine: [],
     
      analysis: [],
      institution: '',
      agent: ''
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
      axios.get(`http://localhost:3000/recipe/${params.id}`)

      //-----------------------------------------------------------

      .then(({ data: { oneRecipe }}) => {this.setState({ oneRecipe })
    console.log(oneRecipe)  
    })
      this.setState({ form: { title: 'Edit', button: 'Edit', endpoint: `/recipe/${params.id}` } })
      
    } else {

      this.setState({ form: { title: 'Create', button: 'Create', endpoint: '/recipe' } })
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { recipe, form } = this.state;
    if (form.title === 'Edit') {
      axios.put(`http://localhost:3000${form.endpoint}`, recipe)

      //axios.put(`https://frozen-plateau-10025.herokuapp.com${form.endpoint}`, recipe)

      .then(({ data }) => {
        console.log(data);
        this.setState({
          recipe: {
              date: '',
              observations: '',
              medicine: [],
              
              analysis: [],
              institution: '',
              agent: ''
          }
        });
        this.props.history.push('/recipes')
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
    //axios.post('http://localhost:3000/recipe', recipe)
      
    MY_SERVICE.create(this.state.recipe)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          recipe: {
            date: '',
            observations: '',
            medicine: [],
            analysis: [],
            institution: '',
            agent: ''
          }
        });
        this.props.history.push('/recipes')
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  handleInputs = (e) => {
    const { recipe } = this.state;
    const key = e.target.name;
    recipe[key] = e.target.value;
    this.setState({ recipe });
  };

  render() {
    const { recipe, form } = this.state;
    console.log(this.props)
    return (
      <div>
         
        <h1  style={{ width: '50vw' }}>{form.title}</h1>
        <form action="" onSubmit={this.onSubmit}>
          <input type="date"  onChange={this.handleInputs} name="date" placeholder="Date"/>
          <input type="text" value={recipe.name} name='agent' onChange={this.handleInputs} placeholder='Agente' />
          <input type="text"  name='observations' onChange={this.handleInputs}  placeholder='Observaciones' />
          <input type="text" name='institution' onChange={this.handleInputs} placeholder='Institutción' />
          
          <br/>
          <br/>
          <button type='submit' value={form.button}>{form.button}</button>
        </form>
        <Link to="/recipes"><button type="submit" value="Login">Cancel</button></Link>
      </div>
    );
  }
}

export default RecipeForm;