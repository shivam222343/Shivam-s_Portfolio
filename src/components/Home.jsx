import React, { useState } from 'react'
import Port from './Port.jpg'
import { useEffect } from 'react'
import { json } from 'react-router-dom'


function Home() {
  return (
    
  
    <div className='h-[screen] w-screen bg-gradient-to-l to-black from-blue-950 flex justify-center items-center'>

        <div className='h-[80vh] w-[80vw] flex justify-center gap-x-32 flex-wrap items-center'>
            <div className='h-[300px] w-[300px] flex flex-col felx-wrap items-center justify-center'>
                <h1 className='font-bold text-white animate-bounce'>Welcome To My</h1>
              <div className=' relative '>
              <h1 style={{
              }} className='text-7xl text-pink-800 animate-pulse animate-wipe '>Portfolio</h1>
              </div>
            </div>
            <div className='h-[300px] w-[300px] overflow-hidden rounded-full '>
                <img src={Port} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home