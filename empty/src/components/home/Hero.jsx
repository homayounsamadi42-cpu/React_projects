import React from 'react'

function Hero() {
  return (
    <div className='max-w-full mx-5 md:mx-20 my-5   lg:mx-100 lg:my-30 text-[18px]'>
        <div className="heading my-10">
            <h1 className='flex text-7xl font-bold lg:my-8  text-center my-2'>Luke Williams</h1>
            <div className=" flex justify-between">
                <h4>frontend developer</h4>
                <p>📍New York</p>
            </div>
        </div>

        <div className="detail text-start">
            <p >Hi there! I’m an adventurer based in New York, with a background in the entertainment industry. These days, I’m driven by a love for creativity and innovation, constantly exploring new ways to connect ideas and build something meaningful.</p>
            <p className='my-3'>When I’m not immersed in my projects, you’ll find me outdoors - scaling rock faces, hiking scenic trails, and embracing the energy of nature. Life is all about climbing to new heights, both literally and figuratively!</p>
        </div>
      </div>
  )
}

export default Hero;
