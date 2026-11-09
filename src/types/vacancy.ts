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