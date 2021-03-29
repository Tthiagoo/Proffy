import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffyserverdeploy.herokuapp.com/',
});

export default api;