import React from 'react';
import App from './autoslider';
const index = () => {
  return (
    <div className='flex z-10 gap-12 justify-between flex-col'>
      <div className='flex gap-14 '>
       <div className='text-white flex flex-col items-center justify-center'>
          <h1 className='text-[36px] font-serif '>hello im Otgontseren</h1>
          <h1 className='text-[40px]'>Im full stack developer</h1>
          <h1 className='text-[32px] border-b-2 border-white'>Contact me</h1>
       </div>
       <div className='text-white z-10 w-[800px] h-[500px] mr-24'>
        <App/>
       </div> 
      </div>
      <div className='flex flex-col z-10 text-white items-center'>
        <div className='ml-[-400px]'>
            <h1 className='text-[32px] font-thin'>About me</h1>
        </div>
        <div className='flex gap-12'>
            <h1 className='text-[32px] font-serif'>frontend</h1>
            <h1 className='text-[32px] font-serif'>backend</h1>
        </div>
      </div>       
    </div>
  )
}

export default index;
