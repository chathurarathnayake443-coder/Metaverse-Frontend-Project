import api from "./api.ts";

export const getMyCompany = async () => {
  const res = await api.get("/company/me")
  return res.data       
}