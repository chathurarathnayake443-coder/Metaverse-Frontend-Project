import React, {useState, useRef} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AppleLogo from "../assets/apple.png"
import VerfiedTick from "../assets/verified.png"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from 'react-icons/fa'
import { Upload, LoaderIcon, Timer, CircleFadingArrowUp, File } from 'lucide-react'
import toast from 'react-hot-toast'

const VacancyPage = () => {

    const[githubURL, setGithubURL] = useState("")
    const[linkedInURL, setLinkedInURL] = useState("")
    const [file, setFile] = useState<File | null>(null)
    const[sampleURL1, setSampleURL1] = useState("")
    const[sampleURL2, setSampleURL2] = useState("")
    const[sampleURL3, setSampleURL3] = useState("")
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

  const handleSubmission = () => {
    
  }

  return (
    <div className='min-h-screen'>
      <NavBar/>
        <main className='p-5'>
            <div className='flex flex-row justify-start items-center gap-2'>
                <img src={AppleLogo} alt="apple-logo" className='w-6 h-6 rounded-4xl'/>
                <span>Apple.Inc</span>
                <img src={VerfiedTick} className='w-5 h-5'/>
            </div>
            <div className='text-gray-400 mt-2 ml-8 text-xs'>Posted at 12.00</div>
            <div className='flex justify-center items-center'>
                <section className='bg-gray-200 rounded-2xl container p-5 mt-3'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='text-2xl font-semibold'>Senior Software Engineer</div>
                    <div className='flex flex-row justify-around items-center gap-3'>
                        <div className='flex flex-row justify-around items-center gap-1 tooltip hover:cursor-pointer' data-tip="Submissions">
                        <CircleFadingArrowUp className='text-green-600'/>
                        <span className='text-gray-700 text-xs'>18</span>
                    </div>
                    <div className='flex flex-row justify-around items-center gap-1 tooltip hover:cursor-pointer' data-tip="Deadline">
                        <Timer className='text-red-600'/>
                        <span className='text-gray-700 text-xs'>Jul 18</span>
                    </div>
                    </div>
                </div>
                <div>Description</div>
                <div className='p-5 mt-3 text-gray-600 text-sm text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus nesciunt non, fuga fugit ullam tempore? Necessitatibus rem tempora, similique odio quae, corporis enim, ducimus unde fugiat dolorem eum. Similique, esse.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, aut distinctio. Dolore quo sapiente ad omnis temporibus deserunt, adipisci in aliquam fugiat voluptatem ullam aspernatur a sit nemo. Consectetur, libero.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus nesciunt non, fuga fugit ullam tempore? Necessitatibus rem tempora, similique odio quae, corporis enim, ducimus unde fugiat dolorem eum. Similique, esse.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, aut distinctio. DoloreLorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus nesciunt non, fuga fugit ullam tempore? Necessitatibus rem tempora, similique odio quae, corporis enim, ducimus unde fugiat dolorem eum. Similique, esse.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, aut distinctio. DoloreLorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus nesciunt non, fuga fugit ullam tempore? Necessitatibus rem tempora, similique odio quae, corporis enim, ducimus unde fugiat dolorem eum. Similique, esse.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, aut distinctio. DoloreLorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus nesciunt non, fuga fugit ullam tempore? Necessitatibus rem tempora, similique odio quae, corporis enim, ducimus unde fugiat dolorem eum. Similique, esse.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, aut distinctio. DoloreLorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus nesciunt non, fuga fugit ullam tempore? Necessitatibus rem tempora, similique odio quae, corporis enim, ducimus unde fugiat dolorem eum. Similique, esse.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, aut distinctio. Dolore
                </div>
                <hr className='border-gray-300 border-2 mb-3'/>
                <div className='flex flex-col justify-start items-center gap-3 rounded-2xl p-3'>
                   <div className='flex flex-row gap-2 justify-start items-center container'>
                    <FaGithub className='w-6 h-6'/>
                    <span className='text-sm font-semibold'>Github Repository URL</span>
                    <input 
                        type="text" 
                        placeholder='https://github.com/user-name/project-name.git' 
                        className='bg-gray-100 rounded-xl p-2 flex-1'
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
                        className='bg-gray-100 rounded-xl p-2 flex-1'
                        value={linkedInURL}
                        onChange={(e) => setLinkedInURL(e.target.value)}
                        />
                   </div>
                   <div className='flex flex-row justify-start items-center gap-2 container'>
                    <File className='w-6 h-6'/>
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
                <hr className='border-gray-300 border-2 mb-3'/>
                <div className='text-sm text-green-700 font-bold'>You can submit upto 3 Github repositories other than assigned task, if you have any, as the additional qualification cases.</div>
                <div className='flex flex-col justify-start items-center gap-3 rounded-2xl p-3'>
                   <div className='flex flex-row gap-2 justify-start items-center container'>
                    <FaGithub className='w-6 h-6'/>
                    <span className='text-sm font-semibold'>Repository URL 1</span>
                    <input 
                        type="text" 
                        placeholder='https://github.com/user-name/project-name.git' 
                        className='bg-gray-100 rounded-xl p-2 flex-1'
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
                        className='bg-gray-100 rounded-xl p-2 flex-1'
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
                        className='bg-gray-100 rounded-xl p-2 flex-1'
                        value={sampleURL3}
                        onChange={(e) => setSampleURL3(e.target.value)}
                        />
                   </div>
                </div>
                <hr className='border-gray-300 border-2 mb-3'/>
                <div className='text-gray-500 text-sm font-semibold'>After the reviewing process, your eligibility for the posted vacancy will be informed to you by the Company itself through your provided email address.</div>
                <div className='flex justify-end items-center gap-4 p-3'>
                    <a
                        href={""}
                        download="resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="btn text-black rounded-md"
                        >
                        Download Task
                        </a>
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
