import React from 'react'
import posts from "../../data/posts"
function BlogCard() {
  return (
    <div className='my-6'>
        {posts.map((item)=>(
            <div className='border-b-2 border-b-gray-500'>
                <div className='group flex gap-6  hover: cursor-pointer py-2 '>
                    <p className='text-gray-500 text-[15px] p-0.5:'>{item.date}</p>
                    <p className='text-[17px] group-hover:text-orange-500 p-0.5'>{item.detaile}</p>
                </div>
                
            </div>
            
        ))}
      
    </div>
  )
}

export default BlogCard
