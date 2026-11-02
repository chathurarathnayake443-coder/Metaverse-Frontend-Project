import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const SeekerDashboard = () => {

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar/>
      <section className='flex-1'>
        <aside className='hidden md:block fixed top-18 left-0 w-56 h-[calc(100vh-4.5rem)] bg-gray-200 p-3 overflow-y-auto'>
          <div className='flex flex-col gap-1 mt-5'>
            <div className='text-md p-3 font-semibold'>Vacancies</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold'>All Posts</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold'>Applied Posts</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold'>Expired Posts</div>
            <div className='text-md p-3 font-semibold'>Discussions</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold'>All Posts</div>
            <div className='text-sm p-2 transition duration-200 ease-in-out hover:bg-gray-300 hover:border-l-2 hover:border-l-black hover:translate-x-2 hover:font-bold'>Your Questions</div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col md:ml-56">
          <main className="flex-1 p-6">
            <div className="font-bold text-lg">Welcome Back, Chathura</div>
            
          </main>
          <Footer />
        </div>
      </section>
    </div>
  )
}

export default SeekerDashboard
