import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css'
import Particles from './components/Dot';
import Dock from './components/Dock';
import About from './components/About';
import { VscHome,VscAccount , VscArrowUp, VscMail } from 'react-icons/vsc';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FaCode, FaLaptopCode, FaTools, FaCogs, FaKeyboard } from "react-icons/fa";
import { FaGraduationCap,FaProjectDiagram  } from "react-icons/fa";


  const items = [
    { icon: <FaGraduationCap size={18} />, label: 'Education', onClick: () => window.scrollTo({top:640 , behavior:"smooth"}) },
    { icon: <FaCode size={18} />, label: 'Skills', onClick: () => alert('Skills!') },
    { icon: <FaProjectDiagram size={18} />, label: 'Projects', onClick: () => alert('Contact!') },
    { icon: <VscArrowUp size={18} />, label: 'Back To Top', onClick: () => window.scrollTo({top:0 , behavior:"smooth"}) },
  ];


function App() {

  return (
    <div className='relative min-h-screen w-[100vw] h-full'>
       <Navbar/>
       <div className='fixed inset-0 -z-10'>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
       </div>
       
      {/* <div style={{ width: '100%',backgroundColor : 'black', height: '100vh', position: 'relative' }}> */}
        <Dock 
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      {/* </div> */}
      <div className='w-full mt-30'>
          <div className='bg-white/5  md:w-full w-full rounded-xl flex-col md:max-w-[950px] md:px-10 px-2 my-auto backdrop-blur-[8px] flex py-10 justify-between gap-3 mx-auto '>
            <Hero/>
            <About/>
            <WorkExperience/>
            <Education/>
            <Skills/>
            <Projects/>
            <Contact/>
          </div>
      </div>
      

      
      
      

  </div>


  )
}

export default App
