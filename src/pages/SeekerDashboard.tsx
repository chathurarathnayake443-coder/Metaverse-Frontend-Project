import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import VacancyCard from '../components/VacancyCard'
import { getAllVacancies } from '../service/vacancy.ts'
import type { Vacancy } from "../types/vacancy.ts"
import { Link } from 'react-router'


const SeekerDashboard = () => {

  const[vacancies, setVacancies] = useState<Vacancy[]>([])
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    fetchVacancies()
  },[])

  const fetchVacancies = () => {
    getAllVacancies().then((res) => {
      setVacancies(res)
      console.log(res)
    })
    .catch(console.error)
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar/>
      <section className='flex-1'>
        <aside className='hidden md:block border-r-2 border-r-gray-800/60 bg-black fixed top-18 left-0 w-56 h-[calc(100vh-4.5rem)] p-3 overflow-y-auto'>
          <div className='flex flex-col gap-1 mt-5'>
            <div className='text-md p-3 font-semibold'>Vacancies</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>All Posts</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>Applied Posts</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>Expired Posts</div>
            <div className='text-md p-3 font-semibold'>Discussions</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>All Posts</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>Your Questions</div>
            <Link to={"/analyze-cv"} className='text-md p-2 font-semibold mt-50 text-amber-400 border-2 rounded-lg border-amber-400 border-dotted text-center hover:cursor-pointer hover:text-white hover:bg-amber-900/40'>Analyze Your CV</Link>
            <div className='text-white text-xs mt-5 text-center bg-violet-900/40 p-3 rounded-lg border-2 border-violet-600'>Increase Your Hiring Chances by Analyzing Your CV</div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col md:ml-56 min-h-171">
          <main className="flex-1 p-6">
            <div className="font-bold z-10 rounded-3xl text-lg backdrop-blur-xs w-full p-4 transform -translate-y-6 -translate-x-5">Welcome Back, Chathura</div>
            {loading && <div className='text-center text-success py-10'>Loading Notes...</div>}

            {!loading && vacancies.length === 0 &&(
              <p className="mt-16 text-center text-gray-500">No vacancies available right now.</p>
            )}

            {vacancies.length > 0 && (
                <section className='mt-11 z-4'>
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                {vacancies.map(vacancy => (
                    <VacancyCard key={vacancy._id} vacancy={vacancy}/>
                ))}
              </div>
            </section>
            )}
          </main>
          <Footer />
        </div>
      </section>
    </div>
  )
}

export default SeekerDashboard
