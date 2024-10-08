import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Info() {
    return (
        <div className=''>
            <div className='h-auto p-12 relative duration-200 gap-20 flex-wrap flex items-center justify-center w-auto bg-gradient-to-l to-blue-900 from-black scroll-m-1 scrollbar-hide'>
                <div className='h-auto w-96 border-2 relative overflow-hidden mt-20 rounded-xl '>
                    <div className='header h-[70px] bg-white w-96 flex justify-center items-center'>
                        <h1 className='font-bold text-xl border-2 px-3 py-1 rounded-xl'>Personal Information</h1>
                    </div>
                    <div className='body h-[80%] max-w-96 p-4 text-white font-bold flex-wrap'>
                        <h1 className='mt-2'>Full Name : Shivam Digambar Dombe </h1>
                        <h1 className='mt-2'>Phone Number : 8010961216 </h1>
                        <h1 className='mt-2'>Email : shivamdombe1@gmail.com </h1>
                        <h1 className='mt-2 flex relative'>LinkedIn :  | Link - <Link className='text-white mt-1 ml-3 hover:text-blue-500'><FaLinkedin /></Link></h1>
                        <h1 className='mt-2 flex relative'>Github : shivam222343 | Link - <Link to={"https://github.com/shivam222343"} className='text-white mt-1 ml-3 hover:text-black hover:bg-white hover:p-0 hover:rounded-full'><FaGithub /></Link></h1>
                    </div>
                </div>
                <div className='h-auto w-96 border-2 mt-20 relative overflow-hidden rounded-xl '>
                    <div className='header h-[70px] bg-white w-96 flex justify-center items-center'>
                        <h1 className='font-bold text-xl border-2 px-3 py-1 rounded-xl'>Educational Information</h1>
                    </div>
                    <div className='body h-[80%] max-w-96 p-4 text-white font-bold flex-wrap'>
                        <h1 className='mt-2 border-2 inline-block px-3 rounded-lg'>Current Education - 2024-25
                        </h1>
                        <h1 className='mt-2'> II year | B.Tech at Kolhapur Institute of technology, Kolhapur</h1>
                        <h1 className='mt-2'>Course name : Computer Science And Business System
                        </h1>
                        <h1 className='mt-4 border-2 inline-block px-3 rounded-lg'>Educational Background
                        </h1>
                        <h1 className='mt-2'>HSC : DSM Secondary College, Bori (72.55 %) - 2022-23</h1>
                        <h1 className='mt-2'>SSC : Saikrupa Vidyalaya, Bori (99.00 %) - 2020-21</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info