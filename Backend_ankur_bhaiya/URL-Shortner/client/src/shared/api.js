import axios from 'axios'
// import config from '../'

const api = axios.create({
    baseURL: 'http://localhost:5173/api'
})

export default api