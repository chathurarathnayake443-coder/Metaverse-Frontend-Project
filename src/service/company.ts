import api from "./api.ts";

export const getMyCompany = async () => {
  const res = await api.get("/company/me")
  return res.data       
}

export const editDescription = async (description : string) => {
    const res = await api.put("/company/edit-description",{
        description
    })
    return res.data
}