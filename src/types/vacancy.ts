export type Vacancy = {
  _id: string
  company: { _id: string; fullName: string; profileImage?: string }
  title: string
  description: string
  deadlineDate: string
  taskPdfUrl?: string
  currentSubmissionCount: number
  createdAt: string 
  vacancyStatus: string
}

export type VacancyDetail = {
  _id: string
  companyName: string
  companyProfileImage: string | null
  title: string
  deadlineDate: string
  description: string
  taskPdfUrl?: string
  createdAt: string
  currentSubmissionCount: number
}