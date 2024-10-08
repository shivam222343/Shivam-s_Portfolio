import React from 'react'
import Cards from './Cards'
import P2 from './P1.png'
import P1 from './ttt.png'
import P3 from './login.png'

function Projects() {
  return (
    <div>
      <div className='h-auto p-12 relative duration-200 flex items-center w-auto bg-gradient-to-l flex-col to-blue-900 from-black scroll-m-1 scrollbar-hide'>
      <div className='text-white font-bold text-xl font-sans leading-tight mt-20'>My Projects</div>
      <div className='scroll-container h-auto flex flex-wrap w-auto'>
     <Cards title={"Tic-Tac-Toe"} 
     description={"A classic Tic Tac Toe game implemented with sleek UI, providing an engaging and nostalgic experience. Enjoy strategic gameplay with a modern twist."}
     act={"Play-Now"} logo={P1} link={"https://shivam222343.github.io/Tic-tac-toe/"} />
     <Cards title={"Password generator"}  description={"A robust password generator built with React.js and Tailwind CSS, offering customizable, secure passwords with a visually appealing and user-friendly interface."}
     act="Generate Now" logo={P2}/>
     <Cards title={"Login and SignUp Page"}  description={"A secure and intuitive login/signup interface crafted with HTML, CSS, and JavaScript, ensuring seamless user authentication and enhanced user experience."}
     act="Login Here" logo={P3}/>
     </div>
     </div>
    </div>
  )
}

export default Projects