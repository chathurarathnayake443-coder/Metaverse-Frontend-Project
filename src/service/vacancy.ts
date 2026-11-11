import api from "./api.ts";

export const createVacancy = async(title:string, description:string, deadline:string ,file:File) => {

    const formData = new FormData()

    formData.append("title", title)
    formData.append("description", description)
    formData.append("deadline", deadline)
    formData.append("task", file)

    const res = await api.post("/vacancy/create-vacancy",formData)
    return res.data
}

export const getAllVacancies = async() => {
    const res = await api.get("/vacancy/all-vacancies")
    return res.data
}

export const getMyVacancies = async () => {
  const res = await api.get("/vacancy/vacancies/mine")
  return res.data       
}