import React from 'react'

function list({name,price,desc,image}) {
  return (
    <div >
        <div className=' max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden py-5'>
            <img src={image} alt={name} className='w-full h-48 object-cover' />
                <div className="p-4">
                    <h2 className='text-xl font-semibold text-gray-800'>{name}</h2>
                    <p className="text-gray-600 text-lg">${price}</p>
                    <p className='mt-2 text-gray-700 '>{desc}</p>
                    <button className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-500 transition duration-200">Add to card</button>
                </div>
        </div>
    </div>
  )
}

export default list
