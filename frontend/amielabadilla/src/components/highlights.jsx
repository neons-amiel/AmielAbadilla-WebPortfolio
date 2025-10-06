import React from 'react';

function Highlights({title, desc, image}) {

    return (
        <div className='flex flex-row items-start justify-center border-2 w-[550px] p-4 rounded-md border-teal-950 hover:shadow-[0_5px_15px_#00faf6] transition-shadow duration-200 ease-in  backdrop-blur-sm mx-4'>
            <img src={image} alt="" className='w-120 h-50' />
            <div className='flex flex-col  gap-2 ml-3  '>
                <h2 className='text-start text-2xl text-pink-300'>{title}</h2>
                <p className='text-start text-md'>{desc}</p>
            </div>
            

        </div>
    )
}


export default Highlights;
// 