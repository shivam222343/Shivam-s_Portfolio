import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Cards({ title="project", description ="An innovative and user-friendly application demonstrating core development skills, featuring clean design, responsive layout, and robust functionality to enhance user experience.", 
  act="Click Me", logo, link}) {
  return (
    <div className='h-auto w-60 duration-300  hover:duration-200 relative overflow-hidden mt-14 hover:h-auto  bg-slate-800 rounded-xl ml-12 items-center hover:border-2'>
      <div className='Header h-auto p-5 w-[100%] overflow-hidden '>
        <img className='rounded-xl border-2' src={logo} alt="Logo" />
      </div>
      <div className='footer p-5'>
        <h1 className='font-semibold text-white'>{title}</h1>
        <p className='text-zinc-400 truncate duration-300 flex-wrap hover:overflow-visible hover:duration-200 hover:whitespace-normal'>
          {description}
        </p>
<Link to={link}><button className="h-8 duration-300 w-auto mt-3 bg-cyan-500 rounded p-1 px-3 font-bold hover:font-mono hover:bg-blue-900 hover:border-2 text-white ">{act}</button></Link>
      </div>
    </div>
  )
}


export default Cards
