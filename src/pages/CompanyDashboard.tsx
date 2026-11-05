import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AppleLogo from "../assets/apple.png"
import VerfiedTick from "../assets/verified.png"
import { UserRoundCheck, BriefcaseBusiness, Plus } from 'lucide-react';
import VacancyCard from '../components/VacancyCard'
import { Link } from "react-router"

const CompanyDashboard = () => {
  return (
    <div className='flex flex-col'>
      <NavBar/>
      <section className='flex-1'>
        <aside className='hidden md:block bg-gray-200 fixed top-18 left-0 w-56 h-[calc(100vh-4.5rem)] p-3 overflow-y-auto'>
          <div className='flex flex-col gap-1 mt-5'>
            <div className='text-md p-3 font-semibold'>Vacancies</div>
            <Link to={"/new-post"} className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>New Post</Link>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>Expired Posts</div>
            <div className='text-md p-3 font-semibold'>Officers</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>All Officers</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>Your Questions</div>
            <div className='text-md p-3 font-semibold'>Filters</div>
          </div>
        </aside>
        <div className='flex-1 flex flex-col md:ml-56'>
            <div className='p-4'>
                <div className='flex items-center max-w-3xl xl:ml-20'>
                    <div className='flex flex-row justify-around items-center max-w-xl p-2 gap-10'>
                        <img src={AppleLogo} alt="company-logo" className='xl:max-w-30 max-w-15 sm:max-w-20 md:max-w-20 lg:max-w-25 rounded-full'/>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-row items-center justify-around gap-5'>
                                <span className='md:text-5xl text-3xl font-semibold'>Apple.Inc</span>
                                <img src={VerfiedTick} alt="verified-tick" className='md:max-w-10 max-w-7'/>
                            </div>
                            <span className='text-gray-500'>California, United States</span>
                        </div>
                    </div>
                </div>
                <div className='absolute flex flex-col gap-3 top-20 right-5 xl:top-25 xl:right-8 sm:top-23 sm:right-15 lg:top-24 md:top-22 p-2'>
                    <div className='flex flex-row gap-5 bg-gray-100 p-2 rounded-2xl'>
                        <span className='flex flex-row gap-1'>
                        <UserRoundCheck className='text-green-500'/>
                        <span>18</span>
                        </span>
                        <span className='flex flex-row gap-1'>
                            <BriefcaseBusiness className='text-red-500'/>
                            <span>20</span>
                        </span>
                    </div>
                    <Link to={"/create-officer"} className='bg-blue-500 p-2 rounded-lg flex flex-row justify-around items-center hover:cursor-pointer hover:bg-blue-600'>
                        <Plus className='text-white text-xs'/>
                        <span className='text-white text-xs'>New Officer</span>
                    </Link>
                </div>
                <div className='flex justify-center items-center p-5 container'>
                    <div className='bg-gray-100 text-gray-600 rounded-2xl container p-5'>
                        Apple Inc. is an American multinational technology company headquartered in Cupertino, 
                        California, in Silicon Valley, and known for consumer electronics, software and online services. 
                        Founded in 1976 as Apple Computer Company by Steve Jobs, Steve Wozniak and Ronald Wayne, the company 
                        was incorporated by Jobs and Wozniak as Apple Computer, Inc. the following year. Its current name was 
                        adopted in 2007 as the company expanded its focus from computers to consumer electronics. 
                        Apple is one of the Big Tech companies.
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                    <VacancyCard/>
                    <VacancyCard/>
                    <VacancyCard/>
                    <VacancyCard/>
                </div>
            </div>
        <Footer/>
        </div>
      </section>
    </div>
  )
}

export default CompanyDashboard
