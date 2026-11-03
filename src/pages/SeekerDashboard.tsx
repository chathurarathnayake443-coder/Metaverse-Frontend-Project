import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import VacancyCard from '../components/VacancyCard'

const SeekerDashboard = () => {

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar/>
      <section className='flex-1'>
        <aside className='hidden md:block bg-gray-200 fixed top-18 left-0 w-56 h-[calc(100vh-4.5rem)] p-3 overflow-y-auto'>
          <div className='flex flex-col gap-1 mt-5'>
            <div className='text-md p-3 font-semibold'>Vacancies</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>All Posts</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>Applied Posts</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>Expired Posts</div>
            <div className='text-md p-3 font-semibold'>Discussions</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>All Posts</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold hover:cursor-pointer'>Your Questions</div>
            <div className='text-md p-3 font-semibold'>Filters</div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col md:ml-56">
          <main className="flex-1 p-6">
            <div className="font-bold fixed z-10 rounded-3xl text-lg backdrop-blur-xs w-full p-4 transform -translate-y-6 -translate-x-5">Welcome Back, Chathura</div>
            <section className='mt-11 z-4'>
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </section>
    </div>
  )
}

export default SeekerDashboard
