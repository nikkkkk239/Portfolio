import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full text-white mt-22 flex items-center mb-30 flex-col gap-3'>
      <div className='p-2  bg-white text-black rounded-xl px-3 font-light'>
        Contact
      </div>
      <h1 className='md:text-5xl text-3xl text-center font-bold '>Get in Touch</h1>
      <p className='md:text-3xl text-2xl text-white/30 max-w-[600px] text-center'>Want to chat | hire ? Just write a <a className='text-blue-500 cursor-pointer' href="mailto:nikhilpanday239@gmail.com">mail</a> or drop a DM on <a className='text-blue-500 cursor-pointer' href="https://www.linkedin.com/in/nikhil-panday-39776b284/">LinkedIn</a>.</p>
    </div>
  )
}

export default Contact
