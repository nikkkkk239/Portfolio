import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import Particles from './components/Dot';
import Dock from './components/Dock';
import { VscHome,VscArchive,VscAccount , VscSettingsGear, VscArrowCircleUp, VscArrowUp, VscMail } from 'react-icons/vsc';

  const items = [
    { icon: <VscAccount size={18} />, label: 'About', onClick: () => alert('About Me!') },
    { icon: <VscHome size={18} />, label: 'Skills', onClick: () => alert('Skills!') },

    { icon: <VscMail size={18} />, label: 'Contact', onClick: () => alert('Contact!') },
    
    { icon: <VscArrowUp size={18} />, label: 'Back To Top', onClick: () => window.scrollTo({top:0 , behavior:"smooth"}) },
  ];


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative w-[100vw]'>
       <Navbar/>
      <div style={{ width: '100%',backgroundColor : 'black', height: '100vh', position: 'relative' }}>
       
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
        <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
    
  />
        
      </div>
      <div className='h-[100vh] bg-black w-full'></div>
    </div>
  )
}

export default App
