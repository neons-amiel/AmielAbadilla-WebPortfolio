import React from 'react';

function Project({title, image, desc}){

    


    return(
    <div className='flex flex-col items-center rounded-2xl border-2 py-5 px-2 border-teal-950 max-h-1/4 lg:w-1/3 w-full hover:shadow-[0_5px_10px_#00faf6] transition-shadow duration-150 ease-in backdrop-blur-sm '>
            <img src={image} 
                alt={title} 
                className='lg:h-40 lg:w-60 h-1/2 w-100 ' />
            <div className='flex flex-col justify-center w-3/4 items-center text-center mt-3 '>
                <h2 className='text-3xl text-pink-300 py-3'>{title}</h2>
                <p className=''>{desc}</p>
            </div>
        </div>
    )



}

export default Project;