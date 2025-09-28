import React from 'react';


import amiel1 from '../assets/amielpfp1.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import uxdev from '../assets/day2uxdev.jpg';

import Project from '../components/projects.jsx';
import BubbleText from '../components/bubbles.jsx';

function Portfolio(){

    const projects = [
        {
            title: "Project Manager",
            image: uxdev,
            desc: "Led a core team of 36 officers across 7 departments to execute a 3-day Workshop-event",
        },
        {
            title: "Pogi",
            image:  uxdev,
            desc: 'pogi sobra ni amiel yieee', 
        },
    ];



    return(
        
        
    
        <div className='flex flex-col min-h-screen w-full bg-black font-montserrat text-white p-5 scroll-smooth z-50' id='home'  >
            <div className='mx-auto w-full px-10 lg:max-w-6xl'>
                {/** ================= HEADER AREA ================= */}

                <nav className='sticky top-0 left-0 w-full flex justify-center align-items-center p-5 '>
                    <ul className='flex flex-row gap-5 bg-teal-400 pt-3 pb-3 pl-5 pr-5 rounded-md shadow-2xl text-black   '>
                        <a href='#home' className='hover:text-pink-700 cursor-pointer'>Home</a>
                        <a href='#projects' className='hover:text-pink-700 cursor-pointer'>Projects</a>
                        <a href='#Blog' className='hover:text-pink-700 cursor-pointer'>Blog</a>
                    </ul>
                </nav>

                {/** ================= HERO Section ================= */}

                <div className='flex flex-col lg:flex-row md:flex-row justify-start lg:justify-center mt-5 lg:gap-10 gap-5 text-white mb-2 lg:mb-5 md:mb-2 border-2 border-teal-950 p-5 rounded-xl hover:shadow-[0_5px_10px_#00faf6] transition-shadow duration-350 ease-in' >
                    <div className='lg:flex-row sm:flex-col'>
                        <img src={amiel1} 
                        alt="Amiel Picture" 
                        className='lg:w-auto lg:h-96 sm:h-72 sm:w-64 md:w-52 md:h-56 flex justify-end rounded-4xl shadow-lg' />
                    </div>
                    <div className='flex flex-col lg:justify-end justify-center lg:text-start lg:items-start text-center gap-2 lg:gap-3 '>
                        <h1 className='lg:text-8xl text-5xl'>Hi,</h1>
                        <BubbleText />
                        
                        {/** <h1 className='lg:text-7xl text-5xl'>I'm Amiel Abadilla! </h1> */}
                        <h3 className='lg:text-3xl text-xl'>your IT Manager that can CODE</h3>
                        <div className="flex flex-row justify-center  items-center lg:items-start text-center  gap-2 lg:gap-3 bg-teal-500 rounded-md p-2">
                            <a href=""> <img src={github} alt="" className='h-10 w-16 hover:transform-scale-x-1.1' /> </a>
                            <a href="https://linkedin.com/in/amiel-abadilla"> <img src={linkedin} alt="" className='h-10 w-12' /> </a>
            

                        </div>
                    
                    </div>
                    
                </div>


                {/** ================= ShortAbout Section ================= */}

                <div className='flex flex-col lg:flex-col  lg:items-center items-start justify-start mb-25 lg:mt-10 mt-15 border-2 border-teal-950 p-5 rounded-xl hover:shadow-[0_5px_15px_#00faf6] transition-shadow duration-350 ease-in '>
                    <div className='lg:gap-3 gap-0'>
                        <div className='flex lg:flex-row flex-col lg:gap-3 gap-0'>
                            <h1 className='text-teal-300 text-3xl lg:text-4xl lg:mb-3 mb-0 '>Bridging Business and IT with</h1>
                            <h2 className='text-pink-300 text-3xl lg:text-4xl mb-3' >competence</h2>

                        </div>
                        
                        <p className='lg:text-1xl'> Perpetual Goal: Destroy the stereotype that managers do not know what they are talking about</p>
                    </div>
                    <div className='flex justify-center items-center p-3 border-2 rounded-md mt-5 cursor-pointer hover:bg-teal-300 hover:text-black hover:translate-x-3 transition-transform duration-400 '>
                        <a href="#projects" className=''>More about me!</a>
                    </div>
                

                </div>
                
                


                {/** ================= PROJECTS Section ================= */}
                
                <div className='flex flex-col justify-center text-center lg:text-center  mt-50 items-center ' id='projects'>
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

                {/** ================= About Me Section ================= */}

                <div>
                    
                </div>



                {/** ================= FOOTER Section ================= */}

                <footer className=' flex flex-col lg:flex-row justify-between items-center  mt-10 pl-5 pr-5 lg:pl-30 lg:pr-30 '>
                    <div className='flex flex-col lg:flex-row gap-1 lg:gap-3 text-center'>
                        <h1>© Robert Amiel Abadilla.</h1>
                        <h1>All Rights Reserved</h1>
                    </div>

                    <div className="flex flex-row gap-3 items-center justify-center">
                        <a href=""> <img src={github} alt="" className='h-8 w-8' /> </a>
                        <a href="https://linkedin.com/in/amiel-abadilla"> <img src={linkedin} alt="" className='h-8 w-8' /> </a>        
                    </div>
                        
                </footer>

            </div>
             
            

        </div>
        


    )
}

export default Portfolio;