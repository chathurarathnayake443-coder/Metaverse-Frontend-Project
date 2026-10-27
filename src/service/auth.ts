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
