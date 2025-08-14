import React, { useState } from 'react'
import {HiChevronRight} from "react-icons/hi"

const Education = () => {

    const org = [
        {
            id : 1,
            name : "Dr.D.Y Patil Institute Of Technology",
            course : "Bachlor's of Engineering (BE)",
            logoPng : "dpu.png",
            timeLine : "Aug 2023 - May 2027",
            url : "https://engg.dypvp.edu.in"
        },
        {
            id : 2,
            name : "SM Choksey High School & Jr College",
            course : "Secondary Education",
            logoPng : "smchoksey.png",
            timeLine : "Aug 2021 - Feb 2023",
            url : "https://smchokseyschool.org"
        },
        {
            id : 3,
            name : "PWC English Medium School",
            course : "Primary Education",
            logoPng : "pwc.png",
            timeLine : "Aug 2010 - Feb 2020",
            url : "https://www.facebook.com/p/Poona-Womens-Council-School-100069614833514/"
        },
        
    ]
  return (
     <div id='Educations' className="flex flex-col w-full text-white items-center md:items-start justify-between gap-6 px-4 py-5">
      <h1 className='text-3xl font-medium entry_animation'>Education</h1>
      <div className='flex flex-col w-full gap-4'>
        {
            org.map((o )=>{
                return <a href={o.url} className='flex gap-5 entry_animation' key={o.id}>
                            <img className='w-12 h-12 rounded-full object-cover' src={o.logoPng} alt="" />
                            <div className='w-full flex flex-col gap-3'>
                                <div className='flex group md:flex-row flex-col justify-between md:items-center cursor-pointer w-full'> 
                                    <div className='flex flex-col '>
                                        <div className='text-xl flex items-center gap-1'>
                                            <h3>{o.name} </h3>
                                            <p className={`hidden group-hover:block transition-all duration-200 transform`}><HiChevronRight/></p>
                                        </div>
                                        <p className='text-[15px] text-white/80'>{o.course}</p>
                                    </div>
                                    
                                
                                    <div className='text-white/45'>{o.timeLine}</div>
                                </div>
                            </div>
                        </a>
            })
        }
        
      </div>

    </div>
  )
}

export default Education
