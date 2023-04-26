 

import React from 'react'

const HardWorkCard = (props) => {
  return (
    <div className='flex flex-col items-center'> 
        <img src={props.img} alt={props.alt} className="w-40 "/>
        <p className='text-4xl font-semibold'>{props.count}</p>
        <p className='text-3xl font-semibold text-[#7580A1] mt-5'>{props.discription}</p>
     </div>
  )
}

export default HardWorkCard