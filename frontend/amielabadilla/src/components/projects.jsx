import React from 'react';

function Project({title, image, desc, tech}){

    


    return(
    <div className='flex flex-col items-start rounded-2xl border-2 py-5 px-4 border-teal-950 lg:h-110 h-1/2 lg:w-70 md:w-1/3 md:h-110 w-full hover:shadow-[0_5px_10px_#00faf6] transition-shadow duration-150 ease-in backdrop-blur-sm '>
            <img src={image} 
                alt={title} 
                className='lg:h-50 lg:w-100 h-1/2 w-100 rounded-md ' />
            <div className='flex flex-col justify-center w-full items-start text-start mt-3 '>
                <h2 className='text-xl text-pink-300 py-3'>{title}</h2>
                <p className='text-sm'>{desc}</p>
            </div>
            
        </div>
    )



}

export default Project;