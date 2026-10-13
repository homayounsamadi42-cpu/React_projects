import React from 'react'
import img3 from "../../assets/why-us.jpg"
import doc1 from "../../assets/Jonathan_Reed.png"
import doc2 from "../../assets/Olivia_Bennett.png"
export default function WhyUs() {
  return (
    <div className='max-w-6xl mx-auto my-10 flex gap-34 '>
        <div className='flex flex-col gap-15 py-8'>
            <div className='flex gap-2 items-center'>
            <div className='size-2 rounded-full bg-blue-700'></div>
            <h1>Why Us</h1>
            </div>
            <h1 className='text-5xl font-bold'>Why choose VitalFlow for your healthcare?</h1>
            <div className='flex items-center gap-4'>
                <div className='size-8 rounded-full items-center p-1 border'>
                    <p>01</p>
                </div>
                <div>
                    <h1 className='text-[18px] font-bold'>Experienced Professionals</h1>
                    <p className='text-gray-500'>Our team of dedicated healthcare providers brings years of experience and expertise to deliver care</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='size-8 rounded-full items-center p-1 border'>
                    <p>02</p>
                </div>
                <div>
                    <h1 className='text-[18px] font-bold'>Advanced Technology</h1>
                    <p className='text-gray-500' >We utilize cutting-edge medical technology to provide accurate diagnoses and effective treatments</p>
                </div>
            </div>

        </div>
        <div>
            <div className='relative '> 
            <img  className='relative rounded-2xl lg:h-[30rem] lg:w-[60rem]' src={img3} alt="" />
            <div className='absolute bg-white max-w-full shadow lg:p-5 lg:pr-22 rounded-[12px] bottom-[-30px] left-[-30px] '>
                <div className='text-1xl pb-9'>
                    <p>Available Doctors</p>
                    <p className='text-gray-500'>Choose Doctors</p>
                </div>
                <div>
                <div className='flex items-center gap-3'>
                    <img className='w-10 h-10 rounded-full' src={doc1} alt="" />
                    <div className='text-2xl'>
                        <p>Jonathan Reed</p>
                        <p className='text-gray-500 text-[16px]'>Gasteriontologist</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-10 h-10 rounded-full' src={doc2} alt="" />
                    <div className='text-2xl'>
                        <p>Olivia Bennett</p>
                        <p className='text-gray-500 text-[16px]'>Dermatologist</p>
                    </div>
                </div>
                </div>
                 <button className='bg-blue-100 rounded-2xl p-3 w-full'>Meet Our Experts</button>
            </div>
             </div>
        </div>
      
    </div>
  )
}
