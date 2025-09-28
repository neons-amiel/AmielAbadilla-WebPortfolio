import React from 'react';
import Project from '/src/components/projects.jsx';


function Portfolio(){

    const projects = [
        {
            title: "Project Manager",
            image: "src/assets/day2uxdev.jpg",
            desc: "Led a core team of 36 officers across 7 departments to execute a 3-day Workshop-event",
        },
        {
            title: "Pogi",
            image: 'src/assets/day2uxdev.jpg',
            desc: 'pogi sobra ni amiel yieee', 
        },
    ];


    return(
        
        
    
        <div className='flex flex-col min-h-screen w-full bg-black font-montserrat text-white p-5 scroll-smooth z-50' id='home'  >
             {/** ================= HEADER AREA ================= */}

            <nav className='sticky top-0 left-0 w-full flex justify-center align-items-center p-5 '>
                <ul className='flex flex-row gap-5 bg-teal-700 pt-3 pb-3 pl-5 pr-5 rounded-md shadow-2xl text-white  '>
                    <a href='#home' className='hover:text-teal-200 cursor-pointer'>Home</a>
                    <a href='#projects' className='hover:text-teal-200 cursor-pointer'>Projects</a>
                    <a href='#Blog' className='hover:text-teal-200 cursor-pointer'>Blog</a>
                </ul>
            </nav>

             {/** ================= HERO Section ================= */}

            <div className='flex flex-col lg:flex-row md:flex-row justify-start lg:justify-center mt-20 px-10- gap-5 text-white mb-2 lg:mb-60 md:mb-2' >
                <div className='lg:flex-row sm:flex-col'>
                    <img src="src/assets/amielpfp1.jpg" 
                    alt="Amiel Picture" 
                    className='lg:w-auto lg:h-96 sm:h-72 sm:w-64 md:w-52 md:h-56 flex justify-end rounded-4xl shadow-lg' />
                </div>
                <div className='flex flex-col lg:justify-end justify-center lg:text-start lg:items-start text-center gap-2 lg:gap-3 '>
                    <h1 className='lg:text-8xl text-5xl'>Hi, </h1>
                    <h1 className='lg:text-7xl text-5xl'>I'm Amiel Abadilla! </h1>
                    <h3 className='lg:text-3xl text-xl'>your IT Manager that can CODE</h3>
                    <div className="flex flex-row justify-center lg:justify end items-center lg:items-start text-center mt-5 gap-2 lg:gap-3">
                        <a href=""> <img src="src/assets/github.png" alt="" className='h-16 w-16' /> </a>
                        <a href="https://linkedin.com/in/amiel-abadilla"> <img src="src/assets/linkedin.jpg" alt="" className='h-16 w-16' /> </a>
        

                    </div>

                </div>
                
                
            
            </div>
            
            


            {/** ================= PROJECTS Section ================= */}
            
            <div className='flex flex-col justify-center text-center lg:text-center px-4 sm:px-4 md:px-10 mt-50  ' id='projects'>
                <h1 className='text-4xl lg:text-7xl '>Here are my highlights!</h1>
                <div className='flex flex-col lg:flex-wrap justify-center items-center gap-10 mt-10'>
                    {projects.map((project,index) => (
                        <Project
                        key={index}
                        title={project.title}
                        image={project.image}
                        desc={project.desc}
                        />
                    ))}
                    
                </div>
            </div>
            

        </div>
        


    )
}

export default Portfolio;