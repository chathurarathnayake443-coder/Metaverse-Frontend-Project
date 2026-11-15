import React from 'react'
import { ArrowLeft, TrashIcon, FolderClosed } from 'lucide-react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AppleLogo from "../assets/apple.png"
import { Link } from 'react-router'

const SubmissionsPage = () => {
  return (
    <div className='flex flex-col'>
        <NavBar/>
        <div className='p-5'>
            <div className='flex p-2 justify-start'>
        <Link to={"/company-dashboard"} className='flex flex-row justify-around items-center gap-2 p-2 bg-gray-700 hover:bg-gray-800 hover:cursor-pointer rounded-lg'>
            <ArrowLeft size={20}/>
            <span className='text-white text-sm'>Dashboard</span>
        </Link>
      </div>
      <main className='mb-5'>
        <section>
            <div className='flex flex-row items-center justify-between p-5'>
                <div className='flex flex-row justify-between gap-5 items-center p-2'>
                    <img src={AppleLogo} alt="company-logo" className='w-10 rounded-full'/>
                    <span className='text-white text-3xl'>Senior Software Engineer</span>
                </div>
                <div className='flex flex-row gap-3 items-center justify-between'>
                    <span className='text-gray-400 text-sm'>at 12.00 | Jun 18</span>
                    <TrashIcon size={20} className='text-red-600 hover:text-red-800 hover:cursor-pointer'/>
                </div>
            </div>
            <hr className='border-2 border-gray-800 rounded-full mb-5'/>
            <div className='p-5 bg-gray-900 rounded-3xl text-sm leading-relaxed'>
                <div className='bg-blue-600 rounded-lg w-30 p-2 mb-2 flex flex-row justify-around items-center hover:cursor-pointer hover:bg-blue-700'>Job Task<FolderClosed/></div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur 
                fuga fugit quod culpa voluptates, iure assumenda sed ea soluta, dolores 
                voluptas aliquid ullam? Aperiam eum sunt in nobis earum est!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur 
                fuga fugit quod culpa voluptates, iure assumenda sed ea soluta, dolores 
                voluptas aliquid ullam? Aperiam eum sunt in nobis earum est!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur 
                fuga fugit quod culpa voluptates, iure assumenda sed ea soluta, dolores 
                voluptas aliquid ullam? Aperiam eum sunt in nobis earum est!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur 
                fuga fugit quod culpa voluptates, iure assumenda sed ea soluta, dolores 
                voluptas aliquid ullam? Aperiam eum sunt in nobis earum est!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur 
                fuga fugit quod culpa voluptates, iure assumenda sed ea soluta, dolores 
                voluptas aliquid ullam? Aperiam eum sunt in nobis earum est!
            </div>
            <div className='text-xl text-white mt-4'>14 Responses</div>
                <section className='flex flex-col gap-5 p-4'>
                    <div className='flex flex-col p-4 rounded-2xl border-2 border-white'>
                        <div className='flex flex-row justify-between items-center text-white p-4'>
                            <span className='text-2xl'>Chathura Rathnayake</span>
                            <span className='text-sm'>18 June 2026</span>
                        </div>
                        <div className='flex flex-col p-3 bg-green-900/30 rounded-2xl'>
                            <div className='text-lg mb-5'>Details</div>
                            <span className='text-sm text-gray-300 mb-2'>Email :  </span>
                            <span className='text-sm text-gray-300 mb-2'>GitHub URL : </span>
                            <span className='text-sm text-gray-300 mb-2'>LinkedIn URL : </span>
                            <span className='text-sm text-gray-300 mb-2'>Sample Project 1 : </span>
                            <span className='text-sm text-gray-300 mb-2'>Sample Project 2 : </span>
                            <span className='text-sm text-gray-300 mb-2'>Sample Project 3 : </span>
                        </div>
                        <div className='flex justify-end p-2 items-center'>
                            <span className='text-gray-300 text-sm'>12.00 am</span>
                        </div>
                    </div>
                    <div className='flex flex-col p-4 rounded-2xl border-2 border-white'>
                        <div className='flex flex-row justify-between items-center text-white p-4'>
                            <span className='text-2xl'>Chathura Rathnayake</span>
                            <span className='text-sm'>18 June 2026</span>
                        </div>
                        <div className='flex flex-col p-3 bg-green-900/30 rounded-2xl'>
                            <div className='text-lg mb-5'>Details</div>
                            <span className='text-sm text-gray-300 mb-2'>Email :  </span>
                            <span className='text-sm text-gray-300 mb-2'>GitHub URL : </span>
                            <span className='text-sm text-gray-300 mb-2'>LinkedIn URL : </span>
                            <span className='text-sm text-gray-300 mb-2'>Sample Project 1 : </span>
                            <span className='text-sm text-gray-300 mb-2'>Sample Project 2 : </span>
                            <span className='text-sm text-gray-300 mb-2'>Sample Project 3 : </span>
                        </div>
                        <div className='flex justify-end p-2 items-center'>
                            <span className='text-gray-300 text-sm'>12.00 am</span>
                        </div>
                    </div>
                </section>
        </section>
      </main>
        </div>
      <Footer/>
    </div>
  )
}

export default SubmissionsPage
