import React from 'react'

const index = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl h-[300px] cursor-pointer">
        <figure className='relative'>
            <img src="sea.jpg"/>
            <div className='flex justify-center items-center absolute bg-neutral-600 px-2 right-4 top-4 text-white gap-1 rounded-lg'>
                <img src="Frame.png"/><h1>4.8</h1>
            </div>
        </figure>
      <div className="card-body">
         <div className='flex justify-between'>
             <h2 className="card-title">The Oasis</h2>
             <h2 className="card-title">10000$</h2>  
         </div>
             <p>Rio de Janiero, Brazil</p>
     </div>
   </div>
  )
}

export default index;
