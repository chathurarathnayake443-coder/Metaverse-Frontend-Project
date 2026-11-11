import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import UploadProfileImage from '../components/UploadProfileImage';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { editDescription } from '../service/company';

const CompanyDetailsEditPage = () => {

    const[description, setDescription] = useState("")

    const handleEditDescription = async ()=> {
        try{

            if(!description){
                return toast.error("Please fill the Description Field")
            }

            await editDescription(description)
            toast.success("Successfully Updated !")
        }
        catch(error){
            console.log(error)
            toast.error("Error Updating Description !")
        }
    }

  return (
    <div>
      <NavBar/>
      <main className='min-h-screen flex flex-col p-3'>
        <Link to={"/company-dashboard"} className='w-30 p-2 text-xs flex flex-row bg-gray-900 text-white rounded-md gap-2 items-center justify-center hover:bg-black hover:cursor-pointer'>
            <ArrowLeft size={20}/>
            <span>Dashboard</span>
        </Link>
        <div className='flex justify-center items-center p-3 mt-4'>
            <section className='bg-gray-200 rounded-lg p-2 md:min-w-200 md:min-h-140 sm:min-w-170 sm:min-h-150 min-w-100 min-h-140'>
                <div className='flex justify-center items-center p-2'>
                    <div className='text-4xl font-semibold'>Apple.Inc</div>
                </div>
                <div className='text-gray-500 text-sm p-2'>Upload Profile Picture</div>
                <UploadProfileImage/>
                <div className='text-gray-500 text-sm p-2'>Add Description</div>
                <textarea
                    name="" 
                    id="" 
                    className='container bg-white rounded-lg min-h-70 p-4' 
                    placeholder='Write a Description About Your Company Here...'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                </textarea>
                <div className='flex justify-end items-center p-2'>
                    <div 
                        className='bg-gray-800 rounded-md text-white text-sm font-semibold p-1 w-40 text-center hover:cursor-pointer hover:bg-black'
                        onClick={handleEditDescription}>
                        Save Description
                    </div>
                </div>
            </section>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default CompanyDetailsEditPage
