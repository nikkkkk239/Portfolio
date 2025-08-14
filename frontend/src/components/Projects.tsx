import { button } from 'framer-motion/client'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import ProjectCard from './ProjectCards'

const Projects = () => {

  const project = [
    {
      imgs:["aiassis1.jpeg","aiassis2.jpeg","aiassis3.jpeg"],
      name : "VsCode AI Chat Assistant",
      date:"June 2025",
      description:`A smart coding partner that does not disrupt your VS Code workflow. It is able to:
        Summarize your files — instantly generate brief, concise summaries of files in your present working directory.`,
      languages : [
        "TypeScript" , "ReactJs" , "Javascript" , "Vite" ,"TailwindCss","React-Markdown"
      ],
      website:null,
      source : "https://github.com/nikkkkk239/vscode-ai-chat-assistant/"
    },
    {
      imgs:["code1.png","code2.png","code3.png","code4.png"],
      name : "CodeGether",
      date:"Jan 2025",
      description:`CodeGether – Real-Time Collaborative Coding Environment
        CodeGether enables developers to code together in real time — similar to pair programming, but remotely.`,
      languages:[
        "Javascript" , "ReactJs" , "CSS" ,"Monaco Editor" , "Socket.io" , "MongoDb" , "NodeJs" ,"Express","Axios","Zustand"
      ],
      website:null,
      source:"https://github.com/nikkkkk239/Codegether"
    }
    ,{
      imgs:["chat1.png","chat2.png","chat3.png","chat4.png"],
      name : "Chatty",
      date:"Jan 2025",
      description:`Chatty - A chat application to connect with your friends and spill the tea. `,
      languages:[
        "Javascript" , "ReactJs" , "Socket.io" , "MongoDb" , "NodeJs" ,"Express", "Zustand" ,"Axios","JWT"
      ],
      website:null,
      source:"https://github.com/nikkkkk239/chat_app"
    }
    ,{
      name : "ClearHire",
      imgs:["company1.png","company2.png","company3.png"],
      date:"June 2025",
      description:`ClearHire - A web Application which allow companies to track their employees and will not allow employees to work at multiple companies.`,
      languages:[
        "Javascript" ,"Typescript" , "ReactJs" , "Socket.io" , "MongoDb" , "NodeJs" ,"Express", "Zustand" ,"Axios","JWT"
      ],
      website:null,
      source:"https://github.com/nikkkkk239/company"
    }


  ]
  return (
    <div id='Projects' className='text-white w-full flex flex-col gap-15 mt-8'>
      <div className='w-full flex flex-col gap-3.5 items-center justify-center'>
        <div className='p-2 bg-white text-black rounded-xl px-3 font-light'>
            My Projects
        </div>
        <div className='md:text-5xl text-3xl text-center font-bold '>
            What I’ve Been Working On
        </div>
        <div className='text-center text-xl md:text-2xl text-white/30'>
            From minimal websites to full-scale web apps, I’ve built a diverse range of projects. Here are some of my top picks.
        </div>
      </div>

      <div className='flex gap-10 justify-center flex-wrap '>
        {project.map((pro , i)=>{
          return <ProjectCard project={pro} key={i}/>
        })}
      </div>


    </div>
  )
}

export default Projects