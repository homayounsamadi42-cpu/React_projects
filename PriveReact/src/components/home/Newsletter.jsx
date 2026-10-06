import React from 'react'
import img4 from "../../../public/images/img4.png"
function Newsletter() {
  return (
    <div className='max-w-full mx-2 md:mx-20 md:my-10 lg:mx-100 lg:my-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 bg-gray-100 md:p-3 lg:p-4 rounded-sm  border-[1px] border-gray-300 border-gray-700'>
        <img src={img4} alt="boy on the mountain" className='w-full lg:w-[70%]' />
        <div className='flex flex-col '>
            <h1 className='text-2xl my-2 p-2 lg:text-3xl lg:my-4 font-bold'>Subscribe to my Newssletter</h1>
            <div className='flex justify-between gap-2'>
               <input type="text" placeholder='name@gmail.com' className='w-full p-2 border-solid border-2 rounded-2xl in-hover:border-gray-500 ' />
               <button className='bg-black text-white rounded-2xl p-2'>Subscribe</button> 
            </div>
            <p className='text-gray-500 text-["14px"] p-1 lg:text-["18px"] '>Sign up to stay updated about my latest work and adventures. No Spam, No BS. Promise!</p>
        </div>
      </div>
    </div>
  )
}
export default Newsletter;
