import React, { useState, useRef } from "react";

const skills = [
  { title: "CPP", description: "A powerful language for system programming, competitive coding, and building high-performance applications." },
  { title: "Python", description: "A versatile language known for simplicity and used in data science, AI, web development, and automation." },
  { title: "JavaScript", description: "The backbone of web interactivity, enabling dynamic content and client-side logic in browsers." },
  { title: "HTML", description: "The standard language for structuring and displaying content on the web." },
  { title: "SQL", description: "A language used to manage and query structured data in relational databases." },
  { title: "ReactJs", description: "A JavaScript library for building fast and interactive user interfaces with reusable components." },
  { title: "NodeJs", description: "A JavaScript runtime that allows server-side development using JavaScript." },
  { title: "ExpressJs", description: "A minimalist backend framework for Node.js to build APIs and web apps efficiently." },
  { title: "Socket.io", description: "A library enabling real-time, bidirectional communication between clients and servers." },
  { title: "MongoDb", description: "A NoSQL database that stores data in flexible, JSON-like documents for scalability and speed." },
  { title: "FireBase", description: "A backend-as-a-service platform offering real-time database, auth, hosting, and more." },
  { title: "NextJs", description: "A full-stack React framework enabling server-side rendering and static site generation." },
  { title: "TailwindCss", description: "A utility-first CSS framework for building modern, custom UI designs quickly." },
  { title: "MySQL", description: "A widely-used open-source relational database for storing structured data securely." },
  { title: "TypeScript", description: "A typed superset of JavaScript that improves code quality with static type checking." },
  { title: "Computer Networks", description: "Knowledge of protocols, IP addressing, routing, and how computers communicate over networks." }
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoverData, setHoverData] = useState({
    visible: false,
    top: 0,
    left: 0,
    description: "",
  });

  const CARD_WIDTH = 200;
  const CARD_HEIGHT = 140;

  const handleMouseEnter = (e: any, description: string) => {
    if (!containerRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    let left = rect.left - containerRect.left + rect.width - 50;
    let top = rect.top - containerRect.top + rect.height + 10;

    const maxLeft = containerRect.width - CARD_WIDTH - 10;
    const maxTop = containerRect.height - CARD_HEIGHT - 10;

    
    left = Math.min(left, maxLeft);
    top = Math.min(top, maxTop);

    setHoverData({
      visible: true,
      top,
      left,
      description,
    });
  };

  const handleMouseLeave = () => {
    setHoverData(prev => ({ ...prev, visible: false }));
  };

  return (
    <div className="flex flex-col w-full text-white items-center md:items-start justify-between gap-6 px-4 py-3 relative">
      <h1 className="text-3xl font-medium">Skills</h1>

      <div
        ref={containerRef}
        className="relative w-full flex flex-wrap gap-4 overflow-visible z-0"
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="relative bg-white px-3 py-1.5 rounded-lg text-black font-semibold cursor-pointer z-10"
            onMouseEnter={(e) => handleMouseEnter(e, skill.description)}
            onMouseLeave={handleMouseLeave}
          >
            {skill.title}
          </div>
        ))}

        {/* Tooltip card */}
        <div
          className={`absolute transition-all duration-300 ease-in-out pointer-events-none z-50`}
          style={{
            top: hoverData.top,
            left: hoverData.left,
            visibility: hoverData.visible ? 'visible' : 'hidden',
          }}
        >
          <div className="w-[200px] h-[140px] bg-black text-white px-4 py-4 rounded-lg flex items-center justify-center text-center text-sm border border-white/30 shadow-xl shadow-white/20 shadow-lg">
            {hoverData.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
