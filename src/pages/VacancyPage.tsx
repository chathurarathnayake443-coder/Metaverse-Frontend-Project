import React, {useState, useRef, useEffect} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AppleLogo from "../assets/apple.png"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from 'react-icons/fa'
import { Timer, CircleFadingArrowUp, FileIcon, LoaderIcon, BadgeCheck } from 'lucide-react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router'
import type { VacancyDetail } from '../types/vacancy'
import { getVacancyById } from '../service/vacancy'

const VacancyPage = () => {

    const { id } = useParams()
    const [vacancy, setVacancy] = useState<VacancyDetail | null>(null)
    const [loading, setLoading] = useState(true)
    const [downloading, setDownloading] = useState(false)
    const[githubURL, setGithubURL] = useState("")
    const[linkedInURL, setLinkedInURL] = useState("")
    const [file, setFile] = useState<File | null>(null)
    const[sampleURL1, setSampleURL1] = useState("")
    const[sampleURL2, setSampleURL2] = useState("")
    const[sampleURL3, setSampleURL3] = useState("")
    const [uploading, setUploading] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
    if (!id) return
    getVacancyById(id)
      .then((res) => setVacancy(res.data))
      .catch((error) => {
        console.error(error)
        toast.error("Could not load the vacancy !")
      })
      .finally(() => setLoading(false))
  }, [id])

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (!selected) return

    if (selected.type !== "application/pdf") {
      toast.error("Only PDF files are allowed !")
      e.target.value = ""
      return
    }
    if (selected.size > 5 * 1024 * 1024) {
      toast.error("File must be under 5MB !")
      e.target.value = ""
      return
    }
    setFile(selected)
  }

  const handleDownload = async () => {
    if (!vacancy?.taskPdfUrl) return
    setDownloading(true)
    try {
      const res = await fetch(vacancy.taskPdfUrl)  
      if (!res.ok) throw new Error("Download failed")
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${vacancy.title}-task.pdf`
      a.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error(error)
      toast.error("Download failed !")
    } finally {
      setDownloading(false)
    }
  }

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

  const postedDate = new Date(vacancy.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })
  const postedTime = new Date(vacancy.createdAt).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })
  const deadline = new Date(vacancy.deadlineDate).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" })

  const handleSubmission = () => {
    
  }

  return (
    <div className='min-h-screen'>
      <NavBar/>
        <main className='p-5'>
            <div className='flex flex-row justify-start items-center gap-2'>
                {vacancy.companyProfileImage ? (
                <img src={vacancy.companyProfileImage} alt="" className='w-6 h-6 rounded-full object-cover'/>
            ) : (
                <div className='flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs text-white'>
                {vacancy.companyName.charAt(0)}
                </div>
            )}
            <span>{vacancy.companyName}</span>
                <BadgeCheck className='w-5 h-5 fill-blue-500 text-blue-500 [&>path:last-child]:stroke-white'/>
            </div>
            <div className='text-gray-400 mt-2 ml-8 text-xs'>{postedTime} {postedDate}</div>
            <div className='flex justify-center items-center'>
                <section className='bg-gray-500/30 border-r-2 border-b-2 border-r-gray-600 border-b-gray-600 rounded-2xl container p-5 mt-3'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='text-2xl font-semibold'>{vacancy.title}</div>
                    <div className='flex flex-row justify-around items-center gap-3'>
                        <div className='flex flex-row justify-around items-center gap-1 tooltip hover:cursor-pointer' data-tip="Submissions">
                        <CircleFadingArrowUp className='text-green-600'/>
                        <span className='text-gray-200 text-xs'>{vacancy.currentSubmissionCount}</span>
                    </div>
                    <div className='flex flex-row justify-around items-center gap-1 tooltip hover:cursor-pointer' data-tip="Deadline">
                        <Timer className='text-red-600'/>
                        <span className='text-gray-200 text-xs'>{deadline}</span>
                    </div>
                    </div>
                </div>
                <div>Description</div>
                <div className='p-5 mt-3 text-gray-400 text-sm text-justify'>
                    {vacancy.description}
                </div>
                <hr className='border-gray-300/20 border-2 mb-3'/>
                <div className='flex flex-col justify-start items-center gap-3 rounded-2xl p-3'>
                   <div className='flex flex-row gap-2 justify-start items-center container'>
                    <FaGithub className='w-6 h-6'/>
                    <span className='text-sm font-semibold'>Github Repository URL</span>
                    <input 
                        type="text" 
                        placeholder='https://github.com/user-name/project-name.git' 
                        className='bg-gray-500/20 rounded-xl p-2 flex-1'
                        value={githubURL}
                        onChange={(e) => setGithubURL(e.target.value)}
                        />
                   </div>
                   <div className='flex flex-row gap-2 justify-start items-center container'>
                    <FaLinkedin className='w-6 h-6 text-blue-700'/>
                    <span className='text-sm font-semibold mr-16'>LinkedIn URL</span>
                    <input 
                        type="text" 
                        placeholder="https://www.linkedin.com/in/your-name" 
                        className='bg-gray-500/20 rounded-xl p-2 flex-1'
                        value={linkedInURL}
                        onChange={(e) => setLinkedInURL(e.target.value)}
                        />
                   </div>
                   <div className='flex flex-row justify-start items-center gap-2 container'>
                    <FileIcon className='w-6 h-6'/>
                    <label className="font-outfit text-sm font-semibold mr-12">Upload your CV</label>
                        <input
                            ref={inputRef}
                            type="file"
                            accept="application/pdf"
                            onChange={handleChange}
                            className="file-input w-full max-w-md"
                        />
                        {file && <p className="text-sm text-gray-600">Selected: {file.name}</p>}
                   </div>
                </div>
                <hr className='border-gray-300/20 border-2 mb-3'/>
                <div className='text-xs text-green-400 font-normal'>You can submit upto 3 Github repositories other than assigned task, if you have any, as the additional qualification cases.</div>
                <div className='flex flex-col justify-start items-center gap-3 rounded-2xl p-3'>
                   <div className='flex flex-row gap-2 justify-start items-center container'>
                    <FaGithub className='w-6 h-6'/>
                    <span className='text-sm font-semibold'>Repository URL 1</span>
                    <input 
                        type="text" 
                        placeholder='https://github.com/user-name/project-name.git' 
                        className='bg-gray-500/20 rounded-xl p-2 flex-1'
                        value={sampleURL1}
                        onChange={(e) => setSampleURL1(e.target.value)}
                        />
                   </div>
                   <div className='flex flex-row gap-2 justify-start items-center container'>
                    <FaGithub className='w-6 h-6'/>
                    <span className='text-sm font-semibold'>Repository URL 2</span>
                    <input  
                        type="text" 
                        placeholder='https://github.com/user-name/project-name.git' 
                        className='bg-gray-500/20 rounded-xl p-2 flex-1'
                        value={sampleURL2}
                        onChange={(e) => setSampleURL2(e.target.value)}
                        />
                   </div>
                   <div className='flex flex-row gap-2 justify-start items-center container'>
                    <FaGithub className='w-6 h-6'/>
                    <span className='text-sm font-semibold'>Repository URL 3</span>
                    <input 
                        type="text" 
                        placeholder='https://github.com/user-name/project-name.git' 
                        className='bg-gray-500/20 rounded-xl p-2 flex-1'
                        value={sampleURL3}
                        onChange={(e) => setSampleURL3(e.target.value)}
                        />
                   </div>
                </div>
                <hr className='border-gray-300/20 border-2 mb-3'/>
                <div className='text-gray-500 text-sm font-semibold'>After the reviewing process, your eligibility for the posted vacancy will be informed to you by the Company itself through your provided email address.</div>
                <div className='flex justify-end items-center gap-4 p-3'>
                   {vacancy.taskPdfUrl && (
                        <button
                            type="button"
                            onClick={handleDownload}
                            disabled={downloading}
                            className="btn text-gray-400 rounded-md bg-blue-100"
                        >
                            {downloading ? <LoaderIcon className="animate-spin size-4" /> : null}
                            {downloading ? "Downloading..." : "Download Task"}
                        </button>
                        )}
                    <button className='bg-green-800 rounded-md text-sm min-w-30 text-white p-2 hover:bg-green-900 hover:cursor-pointer'>Submit</button>
                </div>
            </section>
            </div>
        </main>
      <Footer/>
    </div>
  )
}

export default VacancyPage
