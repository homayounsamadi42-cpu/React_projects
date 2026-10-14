import React from 'react'

function Hero() {
  return (
    <div className='py-5'>
      <div className='max-w-3xl mx-auto py-4 flex flex-col items-center gap-3 '>
        <div className='flex justify-center my-4'>
            <h4 className=' text-[#4A2E80]'>Blog</h4>
        </div>
        <p className='text-7xl pb-4'>Notes from the <em className='text-[#4A2E80]'>feild.</em></p>
        <p className='text-3xl text-center'>Long-form writing on what we've learned implementing ERP, building custom software, and deploying AI agents. No listicles. No link-bait. Just what we wish we'd known earlier.</p>
      </div>
    </div>
  )
}

export default Hero
