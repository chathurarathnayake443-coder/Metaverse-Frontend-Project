import React from 'react'
import apple from '../assets/apple.png'
import { CircleFadingArrowUp, Timer, Calendar } from 'lucide-react'
import {Link} from "react-router"

const VacancyCard = () => {
  return (
        <Link to={"/job-vacancy"} className='max-w-5xl max-h-5xl rounded-3xl border-b-2 border-b-gray-200 bg-gray-100 p-5 hover:transform hover:-translate-y-2 transition duration-300 hover:cursor-pointer'>
        <div className='flex flex-row gap-2 justify-between items-center'>
            <div className='flex flex-row justify-around items-center w-10 gap-4'>
            <img src={apple} className='w-8 h-8 rounded-4xl'/><span className='font-semibold text-sm'>Apple.Inc</span>
        </div>
        <div className='flex flex-row gap-2 justify-between items-center relative'>
            <span className='w-2 h-2 rounded-4xl bg-green-700 absolute top-2 right-16'></span>
            <span className='w-2 h-2 rounded-3xl bg-green-900 animate-ping'></span>
            <span className='text-green-700 text-xs font-semibold bg-green-100 rounded-lg p-1'>ongoing</span>
        </div>
        </div>
      <div className='p-5'>
        <div className='text-xl rounded-md border-l-2 border-l-black bg-green-200 p-4'>Senior Software Engineer</div>
      </div>
      <div className='font-semibold'>Description</div>
      <div className='p-2 text-gray-600 text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus soluta labore delectus impedit unde corporis sed eveniet quisquam nostrum nesciunt, enim molestiae voluptatum obcaecati. Quis recusandae pariatur nam tempore?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus soluta labore delectus impedit unde corporis sed eveniet quisquam nostrum nesciunt, enim molestiae voluptatum obcaecati. Quis recusandae pariatur nam tempore?
      </div>
      <hr className='border-gray-300'/>
    <div className='mt-3 flex flex-row justify-around items-center'>
        <div className='flex flex-row gap-2 justify-around items-center'>
            <CircleFadingArrowUp className='w-4 h-4 font-bold'/>
            <span className='text-xs text-green-700'>18 Applied</span>
        </div>
        <div className='flex flex-row gap-2 justify-around items-center'>
            <Timer className='w-4 h-4 font-bold'/>
            <span className='text-xs text-red-500'>Jul 18</span>
        </div>
        <div className='flex flex-row gap-2 justify-around items-center'>
            <Calendar className='w-4 h-4 font-bold'/>
            <span className='text-xs text-gray-500'>Jun 18</span>
        </div>
        <span className='text-xs text-gray-500'>12.00 pm</span>
    </div>
    </Link>
  )
}

export default VacancyCard
