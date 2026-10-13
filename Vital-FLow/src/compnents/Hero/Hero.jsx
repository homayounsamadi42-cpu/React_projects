import React from 'react'
import DynamicButton from '../button/DynamicButton'
import professor from "../../assets/professor.jpg"
import img1 from "../../assets/comment-women.webp"
import img2 from "../../assets/Emily_Johnson.webp"
export default function Hero() {
  return (
    <div className='max-w-6xl flex justify-between mx-auto lg:py-26  lg:gap-28'>
      <div className='flex flex-col gap-10 lg:py-15 lg:px-5'>
        <div className='flex gap-4 lg:py-4 text-2xl lg:gap-3'>
         <p>⭐⭐⭐⭐⭐</p>
         <p>5.0 (980 Reviews)</p>   
        </div>
        <h1 className='text-5xl font-bold'>Partner in health and wellness</h1>
        <h3 className='text-2xl text-gray-500'>Providing advanced healthcare solutions with a compassionate touch for every patient.</h3>
        <div className='flex gap-3 '>
          <DynamicButton/>
          <button>▶️ Watch video</button>  
        </div>
        <div className='flex lg:gap-23'>
            <div className='flex size-10 -space-x-3'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img1} alt="" />
            </div>
            <div className='flex flex-col gap-0.5'>
            <p className='font-bold'>5000+ Appointments</p>
            <p className='text-gray-500'>Patients booked already</p>   
            </div>  
        </div>
      </div>
      <img className='lg:h-[700px] w-[600px] rounded-3xl' src={professor} alt="" />
    </div>
  )
}
