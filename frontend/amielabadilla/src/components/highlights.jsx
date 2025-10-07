import React from 'react';

function Highlights({title, desc, image}) {

    return (
        <div className='flex lg:flex-row flex-col items-center justify-center border-2 lg:w-[500px] w-[220px] h-[300px] lg:p-2 pb-4 px-3 rounded-md border-teal-950 hover:shadow-[0_5px_15px_#00faf6] transition-shadow duration-200 ease-in  backdrop-blur-sm mx-4'>
            <img src={image} alt="" className='lg:w-120 lg:h-50 h-52 w-52 rounded-sm' />
            <div className='flex flex-col  lg:gap-2 lg:ml-3 mt-3  '>
                <h2 className='text-start lg:text-2xl text-xl text-pink-300'>{title}</h2>
                <p className='text-start lg:text-md text-sm'>{desc}</p>
            </div>
            
        </div>
    )
}


export default Highlights;
// 