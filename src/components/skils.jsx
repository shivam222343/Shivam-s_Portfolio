import React from 'react'
import Tabs from './SkillTabs/Tabs'

function Skills() {
  return (
    <div className='h-auto p-12 pb-20 relative duration-200 flex items-center w-auto bg-gradient-to-l flex-col to-blue-900 from-black scroll-m-1 scrollbar-hide'>
      <div className='text-white font-bold text-xl font-sans leading-tight mt-20'>My Skills</div>
      <div className='h-auto max-w-[1200px] gap-10 flex flex-wrap p-10 pb-20 '>
        <div><Tabs Domain="Technical " S1="HTML" S2="CSS" S3="JavaScript" S4="React Js" S5="C" S6="Data Structure" S7="R" Style="font-semibold duration-200 text-white px-3 mt-2 hover:border-red-700 hover:text-zinc-400 rounded-xl border-[1px]"/>
        </div>
        <div><Tabs Domain="Design" S1="Canva" S2="Photoshop" S3="Google Slides" S4="MS Power point" Style="font-semibold duration-200 text-white px-3 mt-2 hover:border-red-700 hover:text-zinc-400 rounded-xl border-[1px]"/>
        </div>
        <div> <Tabs Domain="Other" S1="Communication" S2="Problem Solving" S3="Critical Thinking"  Style="font-semibold duration-200 text-white px-3 mt-2 hover:border-red-700 hover:text-zinc-400 rounded-xl border-[1px]"/>
        </div>
      </div>
      </div>
  )
}

export default Skills