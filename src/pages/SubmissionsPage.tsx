import { useEffect, useState } from 'react'
import { ArrowLeft, TrashIcon, FolderClosed, LoaderIcon } from 'lucide-react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router'
import type { VacancyDetail } from '../types/vacancy'
import type { Submission } from '../types/submission'
import { fetchSubmissions } from '../service/submission'
import toast from 'react-hot-toast'

const formatTime = (iso: string) =>
  new Date(iso).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })

const formatShortDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" })

const formatLongDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })

const SubmissionsPage = () => {
  const { id } = useParams()
  const [vacancy, setVacancy] = useState<VacancyDetail | null>(null)
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    fetchSubmissions(id)
      .then((res) => {
        setVacancy(res.data.vacancy)
        setSubmissions(res.data.submissions)
      })
      .catch((error) => {
        console.error(error)
        toast.error("Could not load the vacancy !")
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    )
  }

  if (!vacancy) {
    return <div className="p-10 text-center text-gray-500">Vacancy not found.</div>
  }

  return (
    <div className='flex flex-col'>
      <NavBar />
      <div className='p-5'>
        <div className='flex p-2 justify-start'>
          <Link to={"/company-dashboard"} className='flex flex-row justify-around items-center gap-2 p-2 bg-gray-700 hover:bg-gray-800 hover:cursor-pointer rounded-lg'>
            <ArrowLeft size={20} />
            <span className='text-white text-sm'>Dashboard</span>
          </Link>
        </div>

        <main className='mb-5'>
          <section>
            <div className='flex flex-row items-center justify-between p-5'>
              <div className='flex flex-row gap-5 items-center p-2'>
                {vacancy.companyProfileImage ? (
                  <img src={vacancy.companyProfileImage} alt="company-logo" className='w-10 h-10 rounded-full object-cover' />
                ) : (
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 font-semibold text-white'>
                    {vacancy.companyName.charAt(0)}
                  </div>
                )}
                <span className='text-white text-3xl'>{vacancy.title}</span>
              </div>
              <div className='flex flex-row gap-3 items-center justify-between'>
                <span className='text-gray-400 text-sm'>
                  at {formatTime(vacancy.createdAt)} | {formatShortDate(vacancy.createdAt)}
                </span>
                <TrashIcon size={20} className='text-red-600 hover:text-red-800 hover:cursor-pointer' />
              </div>
            </div>

            <hr className='border-2 border-gray-800 rounded-full mb-5' />

            <div className='p-5 bg-gray-900 rounded-3xl text-sm leading-relaxed'>
              {vacancy.taskPdfUrl && (
                <a
                  href={vacancy.taskPdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className='bg-blue-600 rounded-lg w-32 p-2 mb-3 flex flex-row justify-around items-center hover:cursor-pointer hover:bg-blue-700'
                >
                  Job Task<FolderClosed />
                </a>
              )}
              <div className='whitespace-pre-line'>{vacancy.description}</div>
            </div>

            <div className='text-xl text-white mt-4'>
              {submissions.length} {submissions.length === 1 ? "Response" : "Responses"}
            </div>

            <section className='flex flex-col gap-5 p-4'>
              {submissions.length === 0 && (
                <p className='text-gray-500'>No submissions yet.</p>
              )}

              {submissions.map((s) => (
                <div key={s._id} className='flex flex-col p-4 rounded-2xl border-2 border-white'>
                  <div className='flex flex-row justify-between items-center text-white p-4'>
                    <span className='text-2xl'>{s.user?.fullName ?? "Deleted user"}</span>
                    <span className='text-sm'>{formatLongDate(s.createdAt)}</span>
                  </div>

                  <div className='flex flex-col p-3 bg-green-900/30 rounded-2xl'>
                    <div className='text-lg mb-5'>Details</div>
                    <span className='text-sm text-gray-300 mb-2'>Email : {s.user?.email}</span>
                    <span className='text-sm text-gray-300 mb-2'>
                      GitHub URL : <a href={s.githubRepoUrl} target="_blank" rel="noreferrer" className='underline'>{s.githubRepoUrl}</a>
                    </span>
                    <span className='text-sm text-gray-300 mb-2'>
                      LinkedIn URL : <a href={s.linkedInUrl} target="_blank" rel="noreferrer" className='underline'>{s.linkedInUrl}</a>
                    </span>
                    {s.sampleProjectUrl1 && (
                      <span className='text-sm text-gray-300 mb-2'>
                        Sample Project 1 : <a href={s.sampleProjectUrl1} target="_blank" rel="noreferrer" className='underline'>{s.sampleProjectUrl1}</a>
                      </span>
                    )}
                    {s.sampleProjectUrl2 && (
                      <span className='text-sm text-gray-300 mb-2'>
                        Sample Project 2 : <a href={s.sampleProjectUrl2} target="_blank" rel="noreferrer" className='underline'>{s.sampleProjectUrl2}</a>
                      </span>
                    )}
                    {s.sampleProjectUrl3 && (
                      <span className='text-sm text-gray-300 mb-2'>
                        Sample Project 3 : <a href={s.sampleProjectUrl3} target="_blank" rel="noreferrer" className='underline'>{s.sampleProjectUrl3}</a>
                      </span>
                    )}
                    <span className='text-sm text-gray-300'>
                      CV : <a href={s.cvUrl} target="_blank" rel="noreferrer" className='underline'>Open CV</a>
                    </span>
                  </div>

                  <div className='flex justify-end p-2 items-center'>
                    <span className='text-gray-300 text-sm'>{formatTime(s.createdAt)}</span>
                  </div>
                </div>
              ))}
            </section>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default SubmissionsPage
