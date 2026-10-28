import axios, { AxiosError } from "axios"
import { refreshTokenCall } from "./auth"

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1"
})

const PUBLIC_ENDPOINTS = ["/auth/login", "/auth/register", "/auth/refresh"]

const isPublicUrl = (url?: string) =>
  PUBLIC_ENDPOINTS.some((p) => url?.includes(p))

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("ACCESS_TOKEN")
  if (!isPublicUrl(config.url) && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest: any = error.config

    if (
      error.response?.status === 401 &&
      !originalRequest._isRefresh &&
      !isPublicUrl(originalRequest.url)
    ) {
      originalRequest._isRefresh = true
      try {
        const refreshToken = localStorage.getItem("REFRESH_TOKEN")
        if (!refreshToken) throw new Error("No refresh token available")

        const refreshResponse = await refreshTokenCall(refreshToken)
        const newAccessToken = refreshResponse.data.access_token 

        localStorage.setItem("ACCESS_TOKEN", newAccessToken)
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        return api(originalRequest)
      } catch (err) {
        localStorage.removeItem("ACCESS_TOKEN")
        localStorage.removeItem("REFRESH_TOKEN")
        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)

export default api