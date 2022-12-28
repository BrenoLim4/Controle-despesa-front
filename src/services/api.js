import axios from "axios"

const api = axios.create({
    baseURL: 'http:localhost:8085/controle-financeiro/api'
  });
  
  export default api;
  