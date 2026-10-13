import React from 'react'

export default function Form() {
  return (
    <div className='bg-blue-50 max-w-6xl mx-auto p-10 rounded-2x1 my-20'>
      <div className='flex gap-3'>
        <h1 className='text-4xl'>Virtual Consultation</h1>
        <div className='flex gap-4 lg:py-4 text-2xl lg:gap-3'>
         <p>⭐⭐⭐⭐⭐</p>
         <p>5.0 (980 Reviews)</p>   
        </div>
      </div>
      <div className='flex justify-between p-8'>
        <div className='flex flex-col'>
            <label htmlFor="">Name</label>
            <input className='bg-white p-2 rounded-2xl' type="text"  />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="">Name</label>
            <input className='bg-white p-2 rounded-2xl' type="text"  />
        </div>
        <div className='flex flex-col '>
            <label htmlFor="">Name</label>
            <input className='bg-white p-2 rounded-2xl' type="text"  />
        </div>
        <button className='bg-blue-400 rounded-2xl px-6 py-0' type="submit">Submit</button>
      </div>
      <div className='flex gap-4'>
        <h1 className='text-5xl'>200k+</h1>
        <div className='text-[18px] '>
            <p>Cured satisfied patients </p>
            <p>around the globe</p>
        </div>
        </div>
    </div>
  )
}
