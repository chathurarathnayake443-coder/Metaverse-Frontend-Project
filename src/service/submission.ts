import api from "./api.ts";

export const applyPost = async (vacancyId:string, githubURL:string, linkedInURL:string, file:File, sampleURL1:string, sampleURL2:string, sampleURL3:string) => {

    const formData = new FormData()

    formData.append("githubURL",githubURL)
    formData.append("linkedInURL",linkedInURL)
    formData.append("cv",file)
    formData.append("sampleURL1",sampleURL1)
    formData.append("sampleURL2",sampleURL2)
    formData.append("sampleURL3",sampleURL3)

    const res = await api.post(`/submission/apply-post/${vacancyId}`, formData)
    return res.data
}