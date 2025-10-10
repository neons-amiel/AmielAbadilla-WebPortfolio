import React from 'react';
import Marquee from "react-fast-marquee";


{/** Hero and Link Logos */}
import amiel1 from '../assets/amielpfp1.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import uxdev from '../assets/day2uxdev.jpg';
import resume from '../assets/resume.png';
import resumePDF from '../assets/Resume_Abadilla.pdf';

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
import githubog from '../assets/githubog.png';

{/** Coding Projects  */}
import regsystem from '../assets/regsystem.png';
import aisis from '../assets/aisis.png';
import pos from '../assets/pos.png';
import alo from '../assets/alo.png';
import lazapee from '../assets/lazapee.png';
import family from '../assets/family.png';
import imsummit2024 from '../assets/imsummit2024.png';

{/** Highlights  */}
import peakathonfinalist from '../assets/peakathonfinalist.jpg';
import peakathon from '../assets/peakathon.jpg';
import imsummit from '../assets/imsummitcool.jpg';





{/** Components */}
import Project from '../components/projects.jsx';
import BubbleText from '../components/bubbles.jsx';
import ParticleBackground from "../components/particles.jsx";
import TechStack from '../components/techstack.jsx';
import Highlights from '../components/highlights.jsx';



function Portfolio(){

    const projects = [
        {
            title: "Avenida Law Office Application System",
            image: alo,
            desc: "A Full-Stack Application Management System and Progress Tracker made with Django, React and TailwindCSS",
            link: "https://www.figma.com/design/LVKWoE3mITrmcbh6b7NrBV/ALO-Application-Management-System?node-id=168-438&t=M3GHXae8edFhm4sG-1"
        },
        {
            title: "Ateneo AISIS Redesign",
            image:  aisis,
            desc: "A mockup of how I would redesign the UX of the Ateneo AISIS System using Figma",
            link: "https://www.figma.com/design/UZleEne5kU6RXRb5XK9foW/Mobile-AISIS?node-id=0-1&t=M3GHXae8edFhm4sG-1"
        },
        {
            title: "Lazapee Payroll System",
            image:  lazapee,
            desc: "Lead Developer for a web-based payroll system made with Django and Bootstrap that calculates employee salaries and generates periodic payslips",
            link: "https://github.com/neons-amiel/Lazapee-Payroll-System.git"
        },
        {
            title: "Point of Sales System",
            image:  pos,
            desc: "Developed an easily accessible POS system for any store using Python and Tkinter",
        },
        {
            title: "MISA Family Personality Quiz",
            image:  family,
            desc: "Project Manager to 3 Developers and 2 Designers to create a personality quiz website using PostGreSQL, HTML, CSS and Javascript",
            link: "https://family.misa.org.ph"
        },
        {
            title: "MISA Event Registration System",
            image:  regsystem,
            desc: "Data Architect and Project Manager of MISA's Member Involvement Tracker and Event Registration system",
            
        },
        {
            title: "Dream Calculator",
            image:  regsystem,
            desc: "A passion project involving a calculator that computes your salary after bills and calculates amount needed to reach your dreams",
            link: "https://dreamcalculator.amielabadilla.com"
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
        {name: "Gitlab", logo: gitlab},
        {name: "Github", logo: githubog},

    ]
    
    const highlights = [
        {title: "P&G Peakathon 2024 National Finalist",
         desc: "Ranked Top 10 out of 200+ teams in the P&G Peakathon 2023 Hackathon",
         image: peakathon,
        },
        {title: "IM Summit 2025 Finalist",
         desc: "Ranked Top 5 out of 20 teams in the RCBC IM Summit 2025 Hackathon",
         image: imsummit,
        },
        {title: "Project Director",
         desc: "Led a core team of 36 officers across 7 departments to execute a 3-day Workshop-event",
         image: uxdev,
        },
        {title: "Project Manager",
         desc: "Led a team of 5 developers and 2 designers to deploy the IM Summit 2024 Website within 2 weeks",
         image: imsummit2024,
        },
    ]



    return(
        
        
    
        <div className='relative flex flex-col min-h-screen w-full font-montserrat text-white p-5 scroll-smooth ' id='home'  >
            <ParticleBackground />
            <div className='mx-auto w-full lg:px-10 lg:max-w-6xl px-5'>
                {/** ================= HEADER AREA ================= */}

                <nav className='sticky top-0 left-0 w-full flex justify-center items-center p-3 z-50'>
                    <ul className='flex flex-row gap-5 justify-center items-center bg-teal-400 pt-3 pb-3 pl-5 pr-5 rounded-md shadow-2xl text-black   '>
                        <a href='#home' className='hover:text-pink-700 cursor-pointer'>Home</a>
                        <a href='#about' className='hover:text-pink-700 cursor-pointer'>About</a>
                        <a href='#projects' className='hover:text-pink-700 cursor-pointer'>Projects</a>
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
                        <h3 className='lg:text-3xl text-2xl '>your IT Manager that can CODE</h3>
                        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:items-end text-center  gap-4 lg:gap-3 w-full rounded-md p-2">
                            <div className='flex flex-row gap-5 justify-center items-end'>
                                <a href=""> <img src={github} alt="" className='' /> </a>
                                <a href="https://linkedin.com/in/amiel-abadilla"> <img src={linkedin} alt="" className='' /> </a>
                                <a href="mailto:robertamiel.abadilla@gmail.com"> <img src={gmail} alt="" className='' /> </a>
                            </div>
                            
                            <div className='flex flex-row justify-center items-center gap-1 mb-1'>
                                <a href={resume} download><img src={resume} alt="My Resume" className='h-6 w-6' /></a>
                                <a href={resumePDF} download className='text-xs font-lexend mt-1'>Download my resume</a>
                                
                            </div>
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
                
                


                {/** ================= Coding Projects Section ================= */}
                
                <div className='flex flex-col  justify-center text-center lg:text-center mt-30 items-center mb-20 w-full'  id='projects'>
                    <h1 className='text-4xl lg:text-6xl '>Here are my Projects!</h1>
                    <div className='flex flex-col lg:flex-row md:flex-row md:flex-wrap  justify-center items-center lg:gap-5 gap-5 mt-10 w-full'  >
                        {projects.map((project,index) => (
                            <Project
                            key={index}
                            title={project.title}
                            image={project.image}
                            desc={project.desc}
                            link={project.link}
                            />
                        ))}
                        
                    </div>
                </div>

                {/** ================= Coding Projects Section ================= */}
                <div id='Projects'>

                </div>

                {/** ================= Highlights Section ================= */}
                <div className='flex flex-col justify-center text-center items-center mb-20 w-full'  id='projects'>
                    <h1 className='text-4xl lg:text-6l lg:mb-10'>Here are my Achievements!</h1>
                    <Marquee 
                        speed={70}
                        direction="left"
                        pauseOnClick={true}
                        pauseOnHover={false}     
                        gradient={true}
                        gradientColor={[10, 10, 10]}
                        gradientWidth={60}   
                        className=" h-fit py-4 flex items-center mt-5 "
                        
                        >
                        {highlights.map((highlight, index) => (
                            <div 
                            key={index} 
                            className=""
                            >
                            <Highlights
                                title={highlight.title}
                                image={highlight.image}
                                desc={highlight.desc}
                            />
                            </div>
                        ))}
                    </Marquee>

                </div>
                


                 

                {/** ================= Tech Stack Section ================= */}

                <div className='flex flex-col items-center text-center justify-center w-full mt-10 ' id='techstack'>
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

                <div className='flex flex-col items-center text-center justify-center mt-20 w-full'>
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

                <footer className=' flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-1  mt-10 pl-5 pr-5 lg:pl-30 lg:pr-30 '>
                    <div className='flex flex-col lg:flex-row gap-1 lg:gap-1 text-center'>
                        <h1>© 2025 Robert Amiel Abadilla.</h1>
                        <h1>All Rights Reserved</h1>
                    </div>

                    <div className="flex flex-row gap-4  items-center justify-center">
                        <a href=""> <img src={github} alt="" className='h-8 w-8' /> </a>
                        <a href="https://linkedin.com/in/amiel-abadilla"> <img src={linkedin} alt="" className='h-8 w-8' /> </a>        
                        <a href="mailto:robertamiel.abadilla@gmail.com"> <img src={gmail} alt="" className='h-8 w-8' /> </a>
                    </div>
                        
                </footer>

            </div>
             
            

        </div>
        


    )
}

export default Portfolio;