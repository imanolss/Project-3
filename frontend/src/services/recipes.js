import axios from 'axios';

/*---------------------------

process.env.NODE_ENV === 'production'
  ? (const baseURL = 'here should be your production endpoint')
  : (const baseURL = 'http://localhost:3000');
 
  -------------------------------*/

const baseURL = 'https://mysterious-mesa-15778.herokuapp.com'

//const baseURL = 'https://frozen-plateau-10025.herokuapp.com/'

const SERVICE = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await SERVICE.get('/');
  },
  create: async (recipe) => {
    return await SERVICE.post('/recipe', recipe);
  },
  all: async (id) => {
    return await SERVICE.get('/recipes', id);
  },
  getOne: async (id) => {
    return await SERVICE.get(`/recipe/${id}`);
  },
  update: async(id) => {
    return await SERVICE.put(`/recipe/${id}`);
  },
  delete: async(id, index) => {
    return await SERVICE.delete(`/recipe/${id}`, index)
  }
};

export default MY_SERVICE;