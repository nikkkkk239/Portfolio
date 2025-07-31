import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import Particles from './components/Dot';
import Dock from './components/Dock';
import { VscHome,VscArchive,VscAccount , VscSettingsGear } from 'react-icons/vsc';

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
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
        <div className='h-[100vh] w-full'></div>
      </div>
    </div>
  )
}

export default App
