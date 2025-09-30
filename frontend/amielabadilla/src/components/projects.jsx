import React from 'react';

function Project({title, image, desc}){

    


    return(
    <div className='flex flex-col items-center rounded-2xl border-2 border-teal-200 max-h-1/4 w-full lg:w-3/4 hover:scale-105 transition-transform duration-400 p-3 px-10 back '>
            <img src={image} 
                alt={title} 
                className='lg:h-3/4 lg:w-1/2 h-1/2 w-100 ' />
            <div>
                <h2 className='text-3xl text-pink-300 py-3'>{title}</h2>
                <p className=''>{desc}</p>
            </div>
        </div>
    )



}

export default Project;