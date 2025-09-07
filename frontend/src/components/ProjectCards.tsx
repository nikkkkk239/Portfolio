import {useState,useEffect} from 'react'
import { BsGithub, BsGlobe } from 'react-icons/bs';

interface projectParam{
    imgs:Array<string>;
    name : string;
    description:string;
    date:string;
    languages : Array<string>;
    website: null | string;
    source : string;
};
const ProjectCard = ( {project}  : {project : projectParam}) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (!project.imgs || project.imgs.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImgIndex((prev) =>
        prev + 1 < project.imgs.length ? prev + 1 : 0
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [project.imgs]);

  return (
    <div className='w-full overflow-hidden md:max-w-[380px] max-w-[400px] min-w-[200px] transform transition-all duration-350 rounded-xl flex flex-col gap-3 bg-black border-white/30 border'>
      <div className="relative w-full h-[200px] bg-white/5 overflow-hidden">
        {project.imgs && project.imgs.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={project.name}
            className={`absolute border-b-1 border-white/30 top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${idx === currentImgIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      <div className='flex flex-col gap-2 p-3'>
        <div className='text-xl font-bold'>{project.name}</div>
        <div className='font-extralight text-sm'>{project.date}</div>
        <div className='text-white/40'>{project.description}</div>
        <div className='flex flex-wrap gap-1.5 '>
          {project.languages.map((lan, j) => (
            <p className='bg-white/20 p-1.5 text-sm rounded text-white' key={j}>{lan}</p>
          ))}
        </div>
        <div className='flex gap-3 mt-2'>
          {project.website && <a
            className='bg-white hover:bg-white/80 flex items-center gap-2 p-1 px-2 text-sm rounded-full text-black'
            href={project.website}
          >
            <BsGlobe/> Visit
          </a>}
          <a
            className='bg-white hover:bg-white/80 flex items-center gap-2 p-1 px-2 text-sm rounded-full text-black'
            href={project.source}
          >
            <BsGithub /> Source
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
