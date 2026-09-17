import useApi from "../../../shared/api"
import { useAuth } from "../context/AuthContext"

export function useFetchUser() {
  const api = useApi()
  const { setUser } = useAuth()
  console.log('fetchUser running.............')

  const fetchUser = async () => {
    const res = await api.get("/auth/me")
    setUser(res.data.data.user)
    return res.data
  }

  return { fetchUser }
}