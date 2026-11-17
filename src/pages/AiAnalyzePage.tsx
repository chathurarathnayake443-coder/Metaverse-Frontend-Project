import React, { useState, useRef} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { FileIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { generateVacancySuggestions } from '../service/ai'

const AiAnalyzePage = () => {

    const [file, setFile] = useState<File | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const[analyzing, setAnalyzing] = useState(false)
    const [roles, setRoles] = useState<string[]>([])

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

  const handeClickAnalize = async () => {
            if (!file) {
            toast.error("Please upload your CV first !")
            return
        }

        setAnalyzing(true)
        try {
            const suggested = await generateVacancySuggestions(file) 
            setRoles(suggested)
        } catch (error) {
            console.error(error)
            toast.error("Could not analyze your CV !")
        } finally {
            setAnalyzing(false)
        }
  }

  return (
    <div>
      <NavBar/>
      <main className='flex flex-col p-4 min-h-150'>
        <div className='flex justify-center items-center mt-4'>
            <div className='p-3 text-white text-5xl font-semibold text-center'>See which Roles fits you Most !</div>
        </div>
        <div className='mt-3 p-5 text-xs bg-violet-900/30 border-2 border-violet-600 rounded-lg leading-relaxed text-gray-400'>
            This is an AI Analysis that gives you Vacancy Suggestions which is most suitable for you. You 
            can Upload Your CV here and perform a Vacancy Role Check to see your level in the modern industry
            requirements. After You Perform the AI Analysis here, it will show a List of Job Vacancies that you
            deserves to apply by checking the content in your uploaded CV.
        </div>
        <div className='flex flex-row justify-start h-14 items-center gap-2 mt-10 container'>
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
                        <button 
                            className='ml-10 w-24 hover:border-green-700 h-12 animate-bounce border-2 border-violet-700 rounded-xl hover:cursor-pointer hover:w-30 hover:h-10 transition-[width,height] duration-300'
                            onClick={handeClickAnalize}
                            >
                            Analyze
                        </button>
        </div>
        <div className='flex justify-center items-center p-5 mt-5'>
                {analyzing ? (
                    <p className='text-gray-400'>Analyzing your CV...</p>
                ) : roles.length === 0 ? (
                    <p className='text-gray-500'>Upload your CV and click Analyze to see suggested roles.</p>
                ) : (
                    <div className='container border-2 border-amber-600 rounded-xl gap-10 bg-amber-900/20 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {roles.map((role) => (
                        <div
                        key={role}
                        className='p-4 text-xl font-semibold border-2 border-amber-300 w-60 text-center rounded-xl bg-amber-900/70'
                        >
                        {role}
                        </div>
                    ))}
                    </div>
                )}
                </div>
      </main>
      <Footer/>
    </div>
  )
}

export default AiAnalyzePage
