import React from 'react'
import apple from '../assets/apple.png'
import { CircleFadingArrowUp, Timer, Calendar } from 'lucide-react'
import {Link} from "react-router"
import type { Vacancy } from "../types/vacancy.ts"

type Props = {
    vacancy:Vacancy
}

const VacancyCard = ({vacancy} : Props) => {
  return (
        <Link to={`/job-vacancy/${vacancy._id}`} className='flex flex-col max-w-5xl h-96 rounded-3xl border-b-2 overflow-auto border-b-gray-200 bg-gray-100 p-5 hover:transform hover:-translate-y-2 transition duration-300 hover:cursor-pointer'>
        <div className='flex flex-row gap-2 justify-between items-center'>
            <div className='flex flex-row justify-around items-center w-10 gap-4'>
            <img src={vacancy.company.profileImage} className='w-8 h-8 rounded-4xl'/><span className='font-semibold text-sm'>{vacancy.company.fullName}</span>
        </div>
        <div className='flex flex-row gap-2 justify-between items-center relative'>
            <span className='w-2 h-2 rounded-4xl bg-green-700 absolute top-2 right-16'></span>
            <span className='w-2 h-2 rounded-3xl bg-green-900 animate-ping'></span>
            <span className='text-green-700 text-xs font-semibold bg-green-100 rounded-lg p-1'>ongoing</span>
        </div>
        </div>
      <div className='py-4 shrink-0'>
        <div className='text-xl rounded-md border-l-2 border-l-black bg-green-200 p-4 line-clamp-2'>{vacancy.title}</div>
      </div>
      <div className='font-semibold shrink-0'>Description</div>
      <div className='flex-1 min-h-0 overflow-y-auto p-2 text-gray-600 text-sm'>{vacancy.description}</div>
      <hr className='border-gray-300 shrink-0'/>
    <div className='mt-3 flex flex-row justify-around items-center shrink-0'>
        <div className='flex flex-row gap-2 justify-around items-center'>
            <CircleFadingArrowUp className='w-4 h-4 font-bold'/>
            <span className='text-xs text-green-700'>{vacancy.currentSubmissionCount} Applied</span>
        </div>
        <div className='flex flex-row gap-2 justify-around items-center'>
            <Timer className='w-4 h-4 font-bold'/>
            <span className='text-xs text-red-500'>{new Date(vacancy.deadlineDate).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
                })}
            </span>
        </div>
        <div className='flex flex-row gap-2 justify-around items-center'>
            <Calendar className='w-4 h-4 font-bold'/>
            <span className='text-xs text-gray-500'>{new Date(vacancy.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                })}
            </span>
        </div>
        <span className='text-xs text-gray-500'>{new Date(vacancy.createdAt).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
                })}
        </span>
    </div>
    </Link>
  )
}

export default VacancyCard
