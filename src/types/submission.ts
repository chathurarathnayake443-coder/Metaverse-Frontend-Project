export type Submission = {
  _id: string
  user: { _id: string; fullName: string; email: string; telephone: string; profileImage?: string } | null
  githubRepoUrl: string
  linkedInUrl: string
  sampleProjectUrl1?: string
  sampleProjectUrl2?: string
  sampleProjectUrl3?: string
  cvUrl: string
  submissionStatus: string
  createdAt: string
}