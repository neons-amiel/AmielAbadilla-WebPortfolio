import React from 'react';


{/** Hero and Link Logos */}
import amiel1 from '../assets/amielpfp1.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import uxdev from '../assets/day2uxdev.jpg';

{/** TechStack Logos */}
import python from '../assets/python.png';
import html from '../assets/html.png';
import css from '../assets/css.png'
import django from '../assets/django.svg';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import next from '../assets/next.svg';
import tailwind from '../assets/tailwind.png';
import java from '../assets/java.png';

{/** Tools Logos */}
import asana from '../assets/asana.png';
import jira from '../assets/jira.png';
import gitlab from '../assets/gitlab.png';
import git from '../assets/git.png';




{/** Components */}
import Project from '../components/projects.jsx';
import BubbleText from '../components/bubbles.jsx';
import ParticleBackground from "../components/particles.jsx";
import TechStack from '../components/techstack.jsx';



function Portfolio(){

    const projects = [
        {
            title: "Project Director",
            image: uxdev,
            desc: "Led a core team of 36 officers across 7 departments to execute a 3-day Workshop-event",
        },
        {
            title: "Vice President for eServices",
            image:  uxdev,
            desc: 'Led 6 AVPs and 40+ officers to create IT Products & Services', 
        },
        {
            title: "AVP for IT Products & Services",
            image:  uxdev,
            desc: 'pogi sobra ni amiel yieee', 
        },
        {
            title: "Lead Developer",
            image:  uxdev,
            desc: 'pogi sobra ni amiel yieee', 
        },
        {
            title: "Project Manager",
            image:  uxdev,
            desc: 'pogi sobra ni amiel yieee', 
        },
    ];

    const techs = [
        {name: "Python", logo: python},
        {name: "HTML", logo: html},
        {name: "CSS", logo: css},
        {name: "Javascript", logo: javascript},
        {name: "TailwindCSS", logo: tailwind},
        {name: "React", logo: react},
        {name: "Next.js", logo: next},
        {name: "Django", logo: django},
        {name: "Java", logo: java},
        {name: "Git", logo: git},


    ];

    const tools = [
        {name: "Asana", logo: asana},
        {name: "Jira", logo: jira},
        {name: "Github", logo: github},
        {name: "Gitlab", logo: gitlab},

    ]
    



    return(
        
        
    
        <div className='relative flex flex-col min-h-screen w-full font-montserrat text-white p-5 scroll-smooth ' id='home'  >
            <ParticleBackground />
            <div className='mx-auto w-full lg:px-10 lg:max-w-6xl px-5'>
                {/** ================= HEADER AREA ================= */}

                <nav className='sticky top-0 left-0 w-full flex justify-center align-items-center p-5 z-50'>
                    <ul className='flex flex-row gap-5 bg-teal-400 pt-3 pb-3 pl-5 pr-5 rounded-md shadow-2xl text-black   '>
                        <a href='#home' className='hover:text-pink-700 cursor-pointer'>Home</a>
                        <a href='#projects' className='hover:text-pink-700 cursor-pointer'>Projects</a>
                        <a href='#techstack' className='hover:text-pink-700 cursor-pointer'>Tech Stack</a>
                        <a href='#Blog' className='hover:text-pink-700 cursor-pointer'>Blog</a>
                    </ul>
                </nav>

                {/** ================= HERO Section ================= */}

                <div className='flex flex-col lg:flex-row md:flex-row justify-start lg:justify-center mt-5 lg:gap-10 gap-5 text-white mb-2 lg:mb-5 md:mb-2 border-2 border-teal-950 p-5 rounded-xl hover:shadow-[0_5px_10px_#00faf6] transition-shadow duration-350 ease-in backdrop-blur-sm' >
                    <div className='lg:flex-row sm:flex-col'>
                        <img src={amiel1} 
                        alt="Amiel Picture" 
                        className='lg:w-auto lg:h-96 sm:h-72 sm:w-64 md:w-52 md:h-56 flex justify-end rounded-4xl shadow-lg' />
                    </div>
                    <div className='flex flex-col lg:justify-end justify-center lg:text-start lg:items-start text-center gap-2 lg:gap-3 '>
                        <h1 className='lg:text-6xl text-4xl'>Hi,</h1>
                        <BubbleText />
                        
                        {/** <h1 className='lg:text-7xl text-5xl'>I'm Amiel Abadilla! </h1> */}
                        <h3 className='lg:text-3xl text-2xl'>your IT Manager that can CODE</h3>
                        <div className="flex flex-row justify-center items-center lg:items-start text-center  gap-2 lg:gap-3 bg-teal-400 backdrop-opacity-40 rounded-md p-2">
                            <a href=""> <img src={github} alt="" className='h-10 w-16 hover:transform-scale-x-1.1' /> </a>
                            <a href="https://linkedin.com/in/amiel-abadilla"> <img src={linkedin} alt="" className='h-10 w-12' /> </a>
                            <a href="mailto:robertamiel.abadilla@gmail.com"> <img src={gmail} alt="" className='h-9 w-11' /> </a>

                        </div>
                    
                    </div>
                    
                </div>


                {/** ================= ShortAbout Section ================= */}

                <div className='flex flex-col lg:flex-col  lg:items-center items-start justify-start mb-25 lg:mt-10 mt-15 border-2 border-teal-950 p-5 rounded-xl hover:shadow-[0_5px_15px_#00faf6] transition-shadow duration-200 ease-in  backdrop-blur-sm'>
                    <div className='lg:gap-3 gap-0'>
                        <div className='flex lg:flex-row flex-col lg:gap-3 gap-0'>
                            <h1 className='text-teal-300 text-3xl lg:text-4xl lg:mb-3 mb-0 '>Bridging Business and IT with</h1>
                            <h2 className='text-pink-300 text-3xl lg:text-4xl mb-3' >strategic acumen</h2>

                        </div>
                        
                        <p className='lg:text-1xl'> Perpetual Goal: To erase friction between Business Requirements and IT Initiatives</p>
                    </div>
                    <div className='flex justify-center items-center p-3 border-2 rounded-md mt-5 cursor-pointer hover:bg-teal-300 hover:text-black hover:translate-x-3 transition-transform duration-200 '>
                        <a href="#projects" className=''>More about me!</a>
                    </div>
                

                </div>
                
                


                {/** ================= Leadership Section ================= */}
                
                <div className='flex flex-col  justify-center text-center lg:text-center mt-50 items-center mb-30 w-full'  id='projects'>
                    <h1 className='text-4xl lg:text-6xl '>Here are my highlights!</h1>
                    <div className='flex flex-col lg:flex-wrap lg:flex-row justify-center items-center lg:gap-5 gap-5 mt-10 w-full'  >
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

                {/** ================= Tech Stack Section ================= */}

                <div className='flex flex-col items-center text-center justify-center w-full  ' id='techstack'>
                    <h1 className='text-4xl'> My Coding Techstack</h1>
                    <div className='flex flex-wrap lg:gap-6 gap-3 lg:w-3/4 w-full items-center justify-center mt-10  '>
                        {techs.map((tech,index) => (
                            <TechStack
                            key={index}
                            name={tech.name}
                            logo={tech.logo}
                            />
                        ))}
                    </div>
                    
                </div>

                <div className='flex flex-col items-center text-center justify-center mt-20 w-full '>
                    <h1 className='text-4xl'> My Tools for Project Management</h1>
                    <div className='flex flex-wrap lg:gap-6 gap-3 lg:w-3/4 w-full items-center justify-center mt-10  '>
                        {tools.map((tool,index) => (
                            <TechStack
                            key={index}
                            name={tool.name}
                            logo={tool.logo}
                            />
                        ))}
                    </div>
                    
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