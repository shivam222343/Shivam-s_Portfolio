import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='h-auto w-auto bg-blue-950 border-t-2 text-white flex-col justify-center items-center p-5'>
          <h1 className='mt-2 text-center font-semibold'>"Striving for <span className='text-red-600'>excellence</span> in every line of <span className='text-red-600'>code</span> ."</h1>
    <div className='h-auto w-auto bottom border-b-2 bg-blue-950 p-5 text-white flex justify-center gap-10 items-center flex-wrap relative bottom-0'>
                         
       <div className='h-auto max-w-[350px] border-b-2 pb-2 md:border-r-2 rounded-xl flex flex-wrap justify-center items-center'>
       <h1 className='mt-2'>Full Name : Shivam Digambar Dombe</h1>
                        <h1 className='mt-2'>Phone Number : 8010961216 </h1>
                        <h1 className='mt-2'>Email : shivamdombe1@gmail.com </h1>
                        <h1 className='mt-2 flex relative'>LinkedIn :  | Link - <Link className='text-white mt-1 ml-3 hover:text-blue-500'><FaLinkedin /></Link></h1>
                        <h1 className='mt-2 flex relative'>Github : shivam222343 | Link - <Link to={"https://github.com/shivam222343"} className='text-white mt-1 ml-3 hover:text-black hover:bg-white hover:p-0 hover:rounded-full'><FaGithub /></Link></h1>
       </div>
       <div className='h-auto max-w-[350px] border-b-2 pb-2 md:border-l-2 rounded-xl flex flex-wrap justify-center items-center'>
       <h1 className='mt-2 text-center'> About : <span className='font-semibold'>I am excited to learn new things on every day. I believe in " <span className='text-red-600'>Learning before Working</span> ".</span>  </h1>
      <h1 className='mt-2 text-center'>Future Plans : Maintain a high GPA and gain a solid understanding of core subjects in Computer Science and Business Systems.</h1>           
    </div>
    </div>
    </div>
  )
}

export default Footer