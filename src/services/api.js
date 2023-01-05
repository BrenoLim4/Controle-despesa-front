import axios from "axios"

const Api = axios.create({
    baseURL: 'http:localhost:8085/controle-financeiro/api',
    headers: {
      'Authorization' : `${localStorage.getItem('token')}`
    }
  });
  
  export default Api;
  