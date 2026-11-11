import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import VerfiedTick from "../assets/verified.png"
import { UserRoundCheck, BriefcaseBusiness, Plus, BadgeCheck } from 'lucide-react';
import VacancyCard from '../components/VacancyCard'
import { Link } from "react-router"
import type { Vacancy } from "../types/vacancy.ts"
import { getMyVacancies } from '../service/vacancy'
import type { CompanyInfo } from '../types/company.ts'
import { getMyCompany } from '../service/company.ts'

const CompanyDashboard = () => {

    const[company, setCompany] = useState<CompanyInfo | null>(null)
    const[vacancies, setVacancies] = useState<Vacancy[]>([])
    const[loading, setLoading] = useState(true)

      useEffect(() => {
            fetchVacancies()
            fetchCompanyDetails()
            }, [])

    const fetchVacancies = () => {
        getMyVacancies().then((res) => {
          setVacancies(res)
          console.log(res)
        })
        .catch(console.error)
        .finally(() => {
          setLoading(false)
        })
      }

    const fetchCompanyDetails = () => {
        getMyCompany().then((res) => {
            setCompany(res.data)
            console.log(res)
        })
        .catch(console.error)
        .finally(() => {
            setLoading(false)
        })
    }  

  return (
    <div className='flex flex-col'>
      <NavBar/>
      <section className='flex-1'>
        <aside className='hidden md:block bg- fixed top-18 left-0 w-56 h-[calc(100vh-4.5rem)] p-3 overflow-y-auto'>
          <div className='flex flex-col gap-1 mt-5'>
            <div className='text-md p-3 font-semibold'>Vacancies</div>
            <Link to={"/new-post"} className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-800 hover:border-l-2 hover:border-l-white hover:translate-x-2 hover:font-bold hover:cursor-pointer'>New Post</Link>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-800 hover:border-l-2 hover:border-l-white hover:translate-x-2 hover:font-bold hover:cursor-pointer'>Expired Posts</div>
            <div className='text-md p-3 font-semibold'>Officers</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-800 hover:border-l-2 hover:border-l-white hover:translate-x-2 hover:font-bold hover:cursor-pointer'>All Officers</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-800 hover:border-l-2 hover:border-l-white hover:translate-x-2 hover:font-bold hover:cursor-pointer'>Your Questions</div>
            <div className='text-md p-3 font-semibold'>Account</div>
            <Link to={"/edit-profile"} className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-800 hover:border-l-2 hover:border-l-white hover:translate-x-2 hover:font-bold hover:cursor-pointer'>Settings</Link>
          </div>
        </aside>
        <div className='flex-1 flex flex-col md:ml-56'>
            <div className='p-4'>
                <div className='flex items-center max-w-3xl xl:ml-20'>
                    <div className='flex flex-row justify-around items-center max-w-xl p-2 gap-10'>
                        {company?.profileImage ? (
                            <img src={company.profileImage} alt="company-logo" className="xl:max-w-30 max-w-15 sm:max-w-20 md:max-w-20 lg:max-w-25 rounded-full" />
                            ) : (
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-400 text-2xl font-semibold text-white">
                                {company?.name?.charAt(0)}
                            </div>
                            )}
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-row items-center justify-around gap-5'>
                                <span className='md:text-5xl text-3xl font-semibold'>{company?.name}</span>
                                <BadgeCheck className='md:w-10 md:h-10 w-7 h-7 fill-blue-500 text-blue-500 [&>path:last-child]:stroke-white' />
                            </div>
                            <span className='text-gray-500'>{company?.address}</span>
                        </div>
                    </div>
                </div>
                <div className='absolute flex flex-col gap-3 top-20 right-5 xl:top-25 xl:right-8 sm:top-23 sm:right-15 lg:top-24 md:top-22 p-2'>
                    <div className='flex flex-row gap-5 bg-gray-100 p-2 rounded-2xl'>
                        <span className='flex flex-row gap-1 tooltip hover:cursor-pointer' data-tip="Officers">
                        <UserRoundCheck className='text-green-500'/>
                        <span className='text-black'>{company?.noOfVerifiedOfficers}</span>
                        </span>
                        <span className='flex flex-row gap-1 tooltip hover:cursor-pointer' data-tip="Vacancies">
                            <BriefcaseBusiness className='text-red-500'/>
                            <span className='text-black'>{company?.noOfVacancies}</span>
                        </span>
                    </div>
                    <Link to={"/create-officer"} className='bg-green-800 p-2 rounded-lg flex flex-row justify-around items-center hover:cursor-pointer hover:bg-green-900'>
                        <Plus className='text-white text-xs'/>
                        <span className='text-white text-xs'>New Officer</span>
                    </Link>
                </div>
                <div className='flex justify-center items-center p-5 container'>
                    <div className='bg-gray-900 text-gray-300 text-md rounded-2xl container p-5'>
                        {company?.description || "No description added yet."}
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
    
                    {loading && <div className='text-center text-success py-10'>Loading Notes...</div>}

                    {!loading && vacancies.length === 0 &&(
                        <p className="mt-16 text-center text-gray-500">No vacancies available right now.</p>
                    )}
                    {vacancies.map(vacancy => (
                        <VacancyCard key={vacancy._id} vacancy={vacancy} />
                    ))}
                </div>
            </div>
        <Footer/>
        </div>
      </section>
    </div>
  )
}

export default CompanyDashboard
