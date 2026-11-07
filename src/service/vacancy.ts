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