import axios from 'axios';

/*---------------------------

process.env.NODE_ENV === 'production'
  ? (const baseURL = 'here should be your production endpoint')
  : (const baseURL = 'http://localhost:3000');
 
  -------------------------------*/

const baseURL = 'http://localhost:3000'

//const baseURL = 'https://frozen-plateau-10025.herokuapp.com/'

const SERVICE = axios.create({ withCredentials: true, baseURL });

const MEDICINE_SERVICE = {
  test: async () => {
    return await SERVICE.get('/');
  },
  create: async (medicine) => {
    return await SERVICE.post('/medicine', medicine);
  },
  all: async (id) => {
    return await SERVICE.get('/medicines', id);
  },
  getOne: async (id) => {
    return await SERVICE.get(`/medicine/${id}`);
  },
  update: async(id) => {
    return await SERVICE.put(`/medicine/${id}`);
  },
  delete: async(id, index) => {
    return await SERVICE.delete(`/medicine/${id}`, index)
  }
};

export default MEDICINE_SERVICE;