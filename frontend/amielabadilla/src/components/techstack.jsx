import React from 'react';


function TechStack({name, logo,}) {

    return (
        <div className='flex flex-col justify-center items-center w-40 border-2 rounded-3xl backdrop-blur-sm gap-3 h-40'>
            <img src={logo} alt={name} className=' max-h-25' />
            <h1>
                {name}
            </h1>

        </div>

    )
    
}

export default TechStack;