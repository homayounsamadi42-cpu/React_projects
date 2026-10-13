import React from 'react'
import img3 from "../../assets/about-us.jpg"
import {FaStar,FaWolfPackBattalion} from "react-icons/fa"
import doc1 from "../../assets/Jonathan_Reed.png"
import doc2 from "../../assets/Olivia_Bennett.png"

export default function AboutUs() {
  return (
    <div className='max-w-6xl mx-auto my-30 flex flex-row-reverse  '>
        <div className='flex flex-col gap-15 py-8  px-22'>
            <div className='flex gap-2 items-center'>
            <div className='size-2 rounded-full bg-blue-700'></div>
            <h1>About us</h1>
            </div>
            <h1 className='text-5xl font-bold'>Vision for a healthier and brighter tomorrow</h1>
            <div className='flex items-center gap-4'>
                <div className='size-8 rounded-full items-center p-1 border'>
                    <FaWolfPackBattalion size={27} color='blue'/>
                </div>
                <div>
                    <h1 className='text-[18px] font-bold'>Our Mission</h1>
                    <p className='text-gray-500'>Our mission is to deliver compassionate and high-quality healthcare services.</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='size-8 rounded-full items-center p-1 border'>
                    <FaStar size={27} color='blue' />
                </div>
                <div>
                    <h1 className='text-[18px] font-bold'>Our Vision</h1>
                    <p className='text-gray-500' >Leading healthcare provider, recognized for innovative practices and care.</p>
                </div>
            </div>
        </div>
        <div>
            <div className='relative '> 
            <img  className='relative rounded-2xl lg:h-[30rem] lg:w-[60rem]' src={img3} alt="" />
             </div>
        </div>
      
    </div>
  )
}
