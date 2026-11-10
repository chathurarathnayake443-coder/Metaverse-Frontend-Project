export type CompanyInfo = {
  name: string
  address: string
  profileImage?: string
  website: string
  description?: string
  isVerified: "VERIFIED" | "NOT_VERIFIED"
  noOfVerifiedOfficers: number
  noOfVacancies: number
}