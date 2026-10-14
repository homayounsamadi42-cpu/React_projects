import React from 'react'
import BlogCard from './BlogCard'

function BlogPosts() {
  return (
    <div className='max-w-full mx-5 my-2 md:mx-20 my-5  lg:mx-100 lg:my-10 md:my-50'>
      <div className='flex justify-between '>
          <h1 className='text-2xl font-bold my-4'>Latest Posts</h1> 
          <h4>see all</h4> 
        </div>
        <hr className='text-orange-500' />

        <BlogCard/>
    </div>
  )
}

export default BlogPosts
