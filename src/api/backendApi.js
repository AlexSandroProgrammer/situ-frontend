import axios from 'axios'
// import variables of enviroment
import { getEnvVariables } from '../helpers'
// import variables of environment
const { BACKEND_API_SITU_URL } = getEnvVariables()

// creamos la instancia de axios para configurar el endpoint principal
const backendApiSitu = axios.create({
  baseURL: BACKEND_API_SITU_URL,
})

backendApiSitu.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

export default backendApiSitu
