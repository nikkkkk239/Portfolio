import React, { useState, useRef ,useEffect} from 'react';

const Navbar = () => {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
  const ulRef = useRef<HTMLUListElement>(null);
  const [showNavbar,setShowNavbar] = useState(true);

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


  return (
    <div className="fixed w-full mt-6 z-10 text-white">
      <div className={`max-w-[900px] ${!showNavbar && "translate-y-[-300px]"} mx-auto py-4 backdrop-blur-2xl bg-white/10 rounded-full flex justify-between transition-all duration-300 whiteShadow items-center px-6`}>
        <div className="font-medium text-xl">Nikhil Panday</div>

        {/* UL container with ref */}
        <ul
          ref={ulRef}
          className="relative flex gap-10 px-2 py-1" onMouseLeave={handlMouseLeave}
        >
          {/* Sliding highlight */}
          <div
            className="absolute h-9 bg-white rounded-full transition-all duration-300 ease-in-out z-[-1]"
            style={{
              left: highlightStyle.left,
              width: highlightStyle.width,
            }} 
          />

          {/* Menu Items */}
          {['About Me', 'Projects', 'Experiences'].map((item, index) => (
            <li
              key={index}
              onMouseEnter={handleHover}
              className="px-4 py-1 hover:text-black cursor-pointer rounded-md transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>

        <button className="hover:translate-y-[-5px] transition-all duration-150 cursor-pointer hover:font-bold">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
