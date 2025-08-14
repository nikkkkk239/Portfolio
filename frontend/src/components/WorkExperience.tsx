import { useState } from 'react'
import {HiChevronRight} from "react-icons/hi"

const WorkExperience = () => {
    const [showDetails , setShowDetails] = useState(-1);

    const companies = [
        {
            id : 1,
            name : "Digital Guruji",
            role : "Full Stack Developer",
            logoPng : "digitalGuruji.png",
            timeLine : "Jan 2025 - Apr 2025",
            details : "Builded multiple websites related to AI tools which includes Script Generator, Image Background Remover, Study Guide and many more. Used to get tasks to build complete Web and have worked with figma along with it. Also Got knowledge related to AWS backend Server API's. Most of the work was related to Frontend side. Got deeper knowledge of Javascript behaviour."
        },
        
    ]

    const handleClick = (id : number)=>{
        if(showDetails == id){
            setShowDetails(-1);
            return;
        }
        setShowDetails(id);
    }
  return (
     <div className="flex flex-col w-full text-white items-center md:items-start justify-between gap-6 px-4 py-8">
      <h1 className='text-3xl font-medium entry_animation'>Work Experience</h1>
      <div className='flex flex-col w-full gap-4'>
        {
            companies.map((company )=>{
                return <div className='flex gap-5 entry_animation' key={company.id} onClick={()=>handleClick(company.id)}>
                            <img className='w-12 h-12 rounded-full object-contain' src={company.logoPng} alt="" />
                            <div className='w-full flex flex-col gap-3'>
                                <div className='flex group justify-between flex-col  md:flex-row md:items-center cursor-pointer w-full'> 
                                    <div className='flex flex-col '>
                                        <div className='text-xl flex items-center gap-1'>
                                            <h3>{company.name} </h3>
                                            <p className={`${showDetails == company.id && "rotate-90"} hidden group-hover:block transition-all duration-200 transform`}><HiChevronRight/></p>
                                        </div>
                                        <p className='text-[15px] text-white/80'>{company.role}</p>
                                    </div>
                                    
                                
                                    <div className='text-white/45'>{company.timeLine}</div>
                                </div>

                                <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden transform ${
                                    showDetails === company.id ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5'
                                }`}
                                >
                                <p className="text-white ">
                                    {company.details}
                                </p>
                                </div>
                            </div>
                        </div>
            })
        }
        
      </div>

    </div>
  )
}

export default WorkExperience
