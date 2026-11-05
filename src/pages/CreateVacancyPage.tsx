import React, { useState , useRef} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { ArrowLeft, SquarePen, LoaderIcon, Upload, TrashIcon, CircleCheck } from "lucide-react"
import toast from 'react-hot-toast'
import { Link } from "react-router"

const CreateVacancyPage = () => {

    const[title, setTitle] = useState("")
    const[description, setDescription] = useState("")
    const [file, setFile] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

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

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please choose a PDF first !")
      return
    }
    setUploading(true)
    try {
      //await uploadTask(file)
      toast.success("CV uploaded !")
      setFile(null)
      if (inputRef.current) inputRef.current.value = ""
    } catch (error) {
      console.error(error)
      toast.error("Upload failed !")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <NavBar/>
      <main className='p-3'>
        <div className='flex flex-col p-3 bg-gray-200 rounded-lg'>
            <div className='flex flex-row p-5'>
                <Link to={"/company-dashboard"} className='flex flex-row gap-1 h-10 bg-gray-800 hover:bg-gray-900 hover:cursor-pointer p-2 rounded-lg justify-around items-center'>
                    <ArrowLeft className='text-white w-4'/>
                    <span className='text-white text-sm'>Dashboard</span>
                </Link>
            </div>
            <div className='flex justify-center items-center p-4 flex-col'>
                <div className='flex flex-row gap-2 '>
                    <SquarePen size={60} className='w-10 text-gray-600'/>
                    <span className='text-5xl text-gray-600'>New Post</span>
                </div>
                <div className='flex flex-col gap-4 mt-5 p-4 max-w-100 md:max-w-400'>
                    <div className='flex md:flex-row flex-col justify-start gap-4 mt-3'>
                    <label htmlFor="" className='text-md text-gray-500'>Title</label>
                    <input type="text" 
                        className='bg-white rounded-lg min-w-90 h-10 md:ml-21 p-2' 
                        placeholder='Software Engineer'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                </div>
                <div className='flex md:flex-row flex-col justify-start gap-4 mt-3'>
                    <label className="font-outfit text-md text-gray-500">Upload Task</label>
                        <input
                            ref={inputRef}
                            type="file"
                            accept="application/pdf"
                            onChange={handleChange}
                            className="file-input min-w-90 md:ml-6 p-2"
                        />
                        {file && <p className="text-sm text-gray-600">Selected: {file.name}</p>}
                        <button
                            type="button"
                            onClick={handleUpload}
                            disabled={uploading || !file}
                            className="flex flex-row w-30 rounded-md items-center text-xs bg-gray-700 hover:bg-black text-white hover:cursor-pointer p-2 gap-2"
                        >
                            {uploading ? <LoaderIcon className="animate-spin size-5" /> : <Upload size={18} />}
                            {uploading ? "Uploading..." : "Upload Task"}
                        </button>
                </div>
                <div className='flex md:flex-row flex-col justify-start gap-4 mt-3'>
                    <label htmlFor="" className='text-md text-gray-500 max-w-2xl'>Description</label>
                    <textarea 
                        className='bg-white rounded-lg min-w-90 h-30 md:ml-8 p-2' 
                        placeholder='We are seeking for a expertised Java Springboot developer who can design highly scalable, robust Enterprise Applications with collaborating with our teams... '
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                </div>
                <div className='flex flex-row justify-center items-center gap-4 mt-3'>
                    <button className='bg-red-500 min-w-30 text-white text-sm rounded-md p-2 flex flex-row justify-around items-center'>
                        <TrashIcon size={20}/>
                        <span>Discard</span>
                    </button>
                    <button className='bg-blue-500 text-white min-w-30 text-sm rounded-md p-2 flex flex-row gap-2 justify-around items-center'>
                        <CircleCheck size={20}/>
                        <span>Post Vacancy</span>
                    </button>
                </div>
                </div>
            </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default CreateVacancyPage
