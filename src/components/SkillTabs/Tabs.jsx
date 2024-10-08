import React from 'react'
import PropTypes from 'prop-types'

function Tabs({Domain,S1,S2,S3,S4,S5,S6,Style}) {
  return (
    <div className='h-300px max-w-[300px] duration-200 inline-block border-2 mt-10 p-5 hover:border-red-700 rounded-lg relative flex-col flex-wrap'>
    <div className='font-bold text-white'>{Domain}</div>
    <div className='h-300px max-w-200px flex flex-wrap'>
        <ul className='flex flex-wrap gap-3 max-w-200px relative'>
            <li className={Style}>{S1}</li>
            <li className={Style}>{S2}</li>
            <li className={Style}>{S3}</li>
            <li className={Style}>{S4}</li>
            <li className={Style}>{S5}</li>
            <li className={Style}>{S6}</li>
        </ul>
    </div>
    </div>
  )
}


export default Tabs
