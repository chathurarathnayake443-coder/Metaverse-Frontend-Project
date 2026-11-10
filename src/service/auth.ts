import api from "../service/api.ts"

export const register = async (name:string, email:string, address:string, contact:string, password:string, gitHubUrl:string, linkedInUrl:string, isEmployeed:boolean, company:string, jobRole:string) => {
    const res = await api.post("/auth/register", {
        name,
        email,
        address,
        contact,
        password,
        gitHubUrl,
        linkedInUrl,
        isEmployeed,
        company,
        jobRole
    })
    return res.data
}

export const companyRegister = async (name:string, email:string, address:string, contact:string, website:string, password:string) => {
    const res = await api.post("/auth/company-signup",{
        name,
        email,
        address,
        contact,
        website,
        password
    })
    return res.data
}

export const login = async (email:string, password:string) => {
    const res = await api.post("/auth/login",{
        email,
        password
    })
    return res.data
}

export const getMyDetails = async () => {
    const res = await api.get("/auth/me")
    return res.data
}

export const refreshTokenCall = async (refreshToken: string) => {
  const res = await api.post("/auth/refresh", { refreshToken })
  return res.data
}

export const uploadProfileImage = async (file: File) => {
  const formData = new FormData()
  formData.append("image", file)    
  const res = await api.put("/auth/profile-image", formData)
  return res.data
}