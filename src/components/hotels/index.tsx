import React from 'react'
import Cards from "../cards"

const index = () => {
  return (
    <div className='my-24'>
         <div className='text-6xl flex justify-center font-bold text-black'>Top Hotels Now</div>
        
         <div className='flex gap-12 flex-wrap mx-[240px] my-24 items-center justify-center'>
         <Cards/>
         <Cards/>
         <Cards/>
         </div>
        
         <div className='flex justify-center'><button className="btn text-black font-bold rounded-3xl text-xl px-12">See all <img src="arrow.png"/></button></div>
    </div>
  )
}

export default index;
