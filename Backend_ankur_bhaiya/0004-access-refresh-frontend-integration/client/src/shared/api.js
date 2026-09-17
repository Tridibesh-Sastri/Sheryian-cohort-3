import axios from 'axios'
import { useAuth } from '../modules/auth/context/AuthContext'
// import { useFetchUser } from '../modules/auth/api/auth.api'


const api = axios.create({
    baseURL: 'http://localhost:5173/api',
    withCredentials: true, // this tell to add cookies data with each request/ api call
})


const useApi = ()=>{
    // const fetchUser = useFetchUser()
    const {accessToken, setAccessToken} = useAuth()

    api.interceptors.request.use(
        (config)=>{
            if(accessToken){
                config.headers.Authorization = `Bearer ${accessToken}`
            }
            return config
        },
        (error)=>{
            return Promise.reject(error)
        }
    )

    api.interceptors.response.use( 
        response=> response,
        async (error)=>{
            if(error.response && error.response.status === 401){
                console.log('interceptors response')
                const res = await axios.post('/api/auth/refresh')
                setAccessToken(res.data.accessToken)
                error.config.headers.Authorization = `Bearer ${res.data.accessToken}`
                console.log(error.config)

                return axios(error.config)
            }
            return Promise.reject(error)
        }
    )

    // console.log(api.request)
    return api
}

export default useApi