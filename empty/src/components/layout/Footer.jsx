import React from 'react'

function Footer() {
  return (
    <div className='max-w-full mx-2 md:mx-20 md:my-10 lg:mx-100 lg:my-20'>
      <hr/>
      <div className='flex justify-between my-5'>
        <p>© Luke Williams | 2026</p>
        <div>
            <ul className='flex justify-around gap-3'>
              <li className='text-orange-500 hover:text-orange-500'><a href="">Home</a></li>
              <li className='hover:text-orange-500'><a href="">About</a></li>
              <li className='hover:text-orange-500'><a href="">Work</a></li>
              <li className='hover:text-orange-500'><a href="">Blog</a></li>
              <li className='hover:text-orange-500'><a href="">Contact</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
