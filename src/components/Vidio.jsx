import React from 'react'
import { vidio } from '../assets'
import { FaRegCirclePlay } from "react-icons/fa6";

function Vidio() {
  return (
    <div className="w-full h-[560px] flex justify-center items-center relative">
      <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src={vidio} type="video/mp4" />
      </video>
      <a href='https://www.youtube.com/' target='_blank' className='absolute left-[50%] top-[50%] translate-[-50%] cursor-pointer'>
        <FaRegCirclePlay  color="white" size={80}/>
      </a>
    </div>
  )
}

export default Vidio