import React from 'react';

function Project({title, image, desc, link}){

    


    return(
    <div className='flex flex-col justify-between items-start rounded-2xl border-2 py-5 px-4 border-teal-950 lg:h-120 h-1/2 lg:w-70 md:w-80 md:h-125     w-full hover:shadow-[0_5px_10px_#00faf6] transition-shadow duration-150 ease-in backdrop-blur-sm '>
            <img src={image} 
                alt={title} 
                className='lg:h-50 lg:w-100 h-1/2 w-full rounded-md ' />
            <div className='flex flex-col  w-full  items-start text-start flex-grow'>
                <h2 className='text-xl text-pink-300 pt-3'>{title}</h2>
                <p className='text-sm mt-2'>{desc}</p>
                
                
            </div>
            <div className='w-full flex justify-start lg:mt-2 mt-6'>
                <div className='flex justify-end items-end p-3 border-2 rounded-md cursor-pointer hover:bg-teal-300 hover:text-black hover:translate-x-3 transition-transform duration-200'>
                    <a href={link} target='_blank' rel='noopener noreferrer'>View Project</a>
                </div>
            </div>
             
    </div>
    )



}

export default Project;