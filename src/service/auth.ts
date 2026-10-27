import api from "../service/api.ts"

export const register = async (name:string, email:string, address:string, telephone:string, password:string, gitHubUrl:string, linkedInUrl:string, isEmployeed:boolean, company:string, jobRole:string) => {
    const res = await api.post("/auth/register", {
        name,
        email,
        address,
        telephone,
        password,
        gitHubUrl,
        linkedInUrl,
        isEmployeed,
        company,
        jobRole
    })
    return res.data
}
