import axios from 'axios'
// import variables of enviroment
import { getEnvVariables } from '../helpers'
// import variables of environment
const { BACKEND_API_URL } = getEnvVariables()

// creamos la instancia de axios para configurar el endpoint principal
const backendApi = axios.create({
  baseURL: BACKEND_API_URL,
})
