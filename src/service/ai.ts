import api from "./api.ts"

export const generateVacancySuggestions = async (file: File): Promise<string[]> => {
    const formData = new FormData()
    formData.append("cv", file)

    const res = await api.post("/generate-content/cv-analysis", formData)
    return res.data.data
}