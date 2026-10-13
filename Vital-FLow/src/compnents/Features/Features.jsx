import React from 'react'
import img1 from "../../assets/hero.png"
export default function Features() {
  return (
    <div className='max-w-6xl mx-auto my-10 flex flex-col gap-14 '>
        <div className='flex flex-col max-w-6x1 mx-auto items-center'>
            <div className='flex items-center gap-3'>
                <div className='size-2 rounded-full bg-blue-700'></div>
                <h1>Features</h1>
            </div>
            <h1 className='text-5xl font-bold text-center mx-55 my-4'>Innovative solutions to enhance medical service</h1>
        </div>
        <div className='grid lg:grid-cols-3'>
            <div className="group max-w-6xl mx-auto flex flex-col items-center p-4 border border-b-0 items-center justify-center p-10 gap3">
                <img className='h-15 w-15 rounded-full group-hover:cursor-pointer' src={img1} alt="" />
                <h1 className='lg:py-4 text-2xl group-hover:cursor-pointer'>Pediatrics</h1>
                <p className='group-hover:cursor-pointer'>Accusantium odio, quidem reprehenderit eaque, quasi debitis delectus, blanditiis dolore accusamus eum rem placeat pariatur repudiandae modi perferendis laborum sed.</p>
                <div className='flex items-center gap-2'></div>
            </div>
            <div className="group max-w-6xl mx-auto flex flex-col items-center p-4 border border-b-0  items-center justify-center p-10 gap3">
                <img className='h-15 w-15 rounded-full group-hover:cursor-pointer' src={img1} alt="" />
                <h1 className='lg:py-4 text-2xl group-hover:cursor-pointer'>Pediatrics</h1>
                <p className='group-hover:cursor-pointer'>Accusantium odio, quidem reprehenderit eaque, quasi debitis delectus, blanditiis dolore accusamus eum rem placeat pariatur repudiandae modi perferendis laborum sed.</p>
                <div className='flex items-center gap-2'></div>
            </div>
            <div className="group max-w-6xl mx-auto flex flex-col items-center p-4 border border-b-0  items-center justify-center p-10 gap3">
                <img className='h-15 w-15 rounded-full group-hover:cursor-pointer' src={img1} alt="" />
                <h1 className='lg:py-4 text-2xl group-hover:cursor-pointer'>Pediatrics</h1>
                <p className='group-hover:cursor-pointer'>Accusantium odio, quidem reprehenderit eaque, quasi debitis delectus, blanditiis dolore accusamus eum rem placeat pariatur repudiandae modi perferendis laborum sed.</p>
                <div className='flex items-center gap-2'></div>
            </div>
            <div className="group max-w-6xl mx-auto flex flex-col items-center p-4 border border-b-0  items-center justify-center p-10 gap3">
                <img className='h-15 w-15 rounded-full group-hover:cursor-pointer' src={img1} alt="" />
                <h1 className='lg:py-4 text-2xl group-hover:cursor-pointer'>Pediatrics</h1>
                <p className='group-hover:cursor-pointer'>Accusantium odio, quidem reprehenderit eaque, quasi debitis delectus, blanditiis dolore accusamus eum rem placeat pariatur repudiandae modi perferendis laborum sed.</p>
                <div className='flex items-center gap-2'></div>
            </div>
            <div className="group max-w-6xl mx-auto flex flex-col items-center p-4 border border-b-0  items-center justify-center p-10 gap3">
                <img className='h-15 w-15 rounded-full group-hover:cursor-pointer' src={img1} alt="" />
                <h1 className='lg:py-4 text-2xl group-hover:cursor-pointer'>Pediatrics</h1>
                <p className='group-hover:cursor-pointer'>Accusantium odio, quidem reprehenderit eaque, quasi debitis delectus, blanditiis dolore accusamus eum rem placeat pariatur repudiandae modi perferendis laborum sed.</p>
                <div className='flex items-center gap-2'></div>
            </div>
            <div className="group max-w-6xl mx-auto flex flex-col items-center p-4 border border-b-0  items-center justify-center p-10 gap3">
                <img className='h-15 w-15 rounded-full group-hover:cursor-pointer' src={img1} alt="" />
                <h1 className='lg:py-4 text-2xl group-hover:cursor-pointer'>Pediatrics</h1>
                <p className='group-hover:cursor-pointer'>Accusantium odio, quidem reprehenderit eaque, quasi debitis delectus, blanditiis dolore accusamus eum rem placeat pariatur repudiandae modi perferendis laborum sed.</p>
                <div className='flex items-center gap-2'></div>
            </div>
        </div>
    </div>
  )
}
