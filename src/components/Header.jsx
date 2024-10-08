import React from 'react'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import logo from './logo.jpg'; 
import { MdPermDeviceInformation } from "react-icons/md";



function Header() {
        const [isHidden, setIsHidden] = useState(false);
      
        const handleClick = (e) => {
          setIsHidden(true);
        }

        const [isPop, setIsPop] = useState(false);
      
        const Pop = (e) => {
          setIsPop(true);
        }
    return (
        <div className='h-20 w-full border-b-2 flex justify-between pl-2 pr-10 bg-gradient-to-r to-slate-950 from-blue-900 z-10 fixed'>
            <div className='h-20 w-48 flex'>
                <div>
                <div className='h-16 w-16 rounded-full overflow-hidden mt-2 ml-2'>
                <img src={logo} alt="Logo" />
                </div>
                </div>
                <div className='ml-5 flex items-center '>
                <h1 className='font-extrabold text-white text-xl'>Shivam Dombe</h1>
                </div>
                <NavLink to={"/Information"} className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} text-xl cursor-pointer mt-4 ml-2`}>< MdPermDeviceInformation /></NavLink>
            </div>
            <div className='h-20 w-auto hidden md:block '>
                <ul className=' cursor-pointer flex gap-6 justify-center items-center mt-7 px-3 rounded-lg'>
                    <li className=' px-3  hover:duration-200 rounded-lg'><NavLink to={"/"} className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} font-semibold`}>Home</NavLink></li>
                    <li className=' px-3  hover:duration-200 rounded-lg'>
                        <NavLink to="/Projects" className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} font-semibold scrollbar-hide`}>
                            Projects
                        </NavLink>
                    </li>
                    <li className=' px-3  hover:duration-200 rounded-lg'><NavLink to="/Skills" className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} font-semibold`}>Skills</NavLink></li>
                </ul>
            </div>
            <div className='h-20 w-40 flex relative'>
               <ul className='cursor-pointer md:flex gap-6 justify-end items-center flex '>
                <li className=' px-3 hover:py-1 hover:duration-200 rounded-lg'><Link to="https://github.com/shivam222343" className='hover:text-red-600 text-white font-bold'>GitHub</Link></li>
                <li className=' px-3 hover:py-1 hover:duration-200 rounded-lg'><Link to="https://youtube.com/@sdartcreations9695?feature=shared" className='hover:text-red-600 text-white font-bold'>YouTube</Link ></li>
               </ul>
            </div>
        </div>
    )
        }

export default Header