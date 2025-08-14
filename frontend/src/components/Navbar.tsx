import React, { useState, useRef ,useEffect} from 'react';
import { HiChevronDown } from 'react-icons/hi';

const Navbar = () => {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
  const ulRef = useRef<HTMLUListElement>(null);
  const [showNavbar,setShowNavbar] = useState(true);
  const [menuShown , setMenuShown]= useState(false);


  const handleHover = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.currentTarget;
    const containerLeft = ulRef.current?.getBoundingClientRect().left || 0;
    const targetRect = target.getBoundingClientRect();


    setHighlightStyle({
      left: targetRect.left - containerLeft,
      width: targetRect.width,
    });
  };

  const handlMouseLeave = ()=>{
    console.log("HI")
    setHighlightStyle({
      left : 0 , width : 0
    })
  }

  window.addEventListener("scroll",()=>{
    if(menuShown){
      setMenuShown(false);
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNavbar(currentScroll < 150); 
      if(showNavbar) {
      console.log("HIIIIIII")

      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleOptionsClick = ()=>{
    setMenuShown(prev=>!prev);
  }


  return (
    <div className="fixed w-full mt-9 z-10 px-4 md:px-6  text-white">
      <div className={`max-w-[500px] entry_animation w-full md:max-w-[900px] ${!showNavbar && "translate-y-[-300px]"} mx-auto py-4 backdrop-blur-lg bg-white/5 relative rounded-full flex justify-between transition-all duration-300 whiteShadow items-center px-6`}>

        <div className={`absolute transform 
          ${menuShown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"} 
          left-1/2 -translate-x-1/2 bottom-[-140px] 
          transition-all duration-300 
          flex flex-col items-center 
          backdrop-blur-xl bg-black text-white 
          rounded-lg pt-1 whiteShadow md:hidden`}>
          
          {['Educations', 'Skills', 'Projects'].map((item, index) => (
            <p
              key={index} 
              className="px-4 py-2 cursor-pointer transition-transform hover:-translate-y-1 rounded-md duration-200"
            >
              <a href={`#${item}`}>{item}</a>
              
            </p>
          ))}
        </div>

        
        <div className={`absolute hover:scale-120 hover:font-bold  md:hidden text-white transition-all duration-100 left-1/2 transform bottom-0 cursor-pointer text-xl' title='More Options ${menuShown && "rotate-180"}`} onClick={()=>handleOptionsClick()} title='More Options'><HiChevronDown/></div>
        <div className="font-medium MuseoModerno text-2xl" title='Nikhil Panday'>NP</div>

        {/* UL container with ref */}
        <ul
          ref={ulRef}
          className="relative hidden
           md:flex gap-8 px-2 py-1" onMouseLeave={handlMouseLeave}
        >
          {/* Sliding highlight */}
          <div
            className="absolute h-9 bg-white/20 rounded-full transition-all duration-500 ease-in-out z-[-1]"
            style={{
              left: highlightStyle.left,
              width: highlightStyle.width,
            }} 
          />

          {/* Menu Items */}
          {['Educations', 'Skills', 'Projects'].map((item, index) => (
            <li
              key={index}
              onMouseEnter={handleHover}
              className="px-4 py-1  cursor-pointer rounded-md transition-colors duration-200"
            >
              <a href={`#${item}`}>{item}</a>
              
            </li>
          ))}
        </ul>

        <button className="hover:translate-y-[-5px] transition-all duration-150 cursor-pointer hover:font-bold" >
          <a href="#contact">Contact</a>
          
        </button>
      </div>
    </div>
  );
};

export default Navbar;
