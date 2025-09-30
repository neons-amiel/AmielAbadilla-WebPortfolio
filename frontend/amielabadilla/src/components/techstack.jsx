import React from 'react';


function TechStack({name, logo,}) {

    return (
        <div className='flex flex-col justify-center items-center w-35  h-35 border-2 rounded-3xl gap-3 border-teal-300 bg-teal-950 hover:shadow-[0_5px_10px_#00faf6] hover:scale-105 transition-shadow-transform duration-180 ease-in backdrop-blur-sm'>
            <img src={logo} alt={name} className=' max-h-20' />
            <h1>
                {name}
            </h1>

        </div>

    )
    
}

export default TechStack;