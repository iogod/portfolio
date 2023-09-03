import React from 'react'

function About() {
  return (
    <div className='text-white grid h-screen  w-full xl:w-1/2  m-auto text-2xl'> 
    
    
    <div className=' flex  flex-col mb-24 uppercase justify-center w-full h-full items-center gap-5'>
    <h1 className='text-4xl  text-bold'>About</h1>
 <h2 className='text-2xl'>Full Stack Developer based in Los Angeles</h2>

 <h2 className='text-2xl '>Email : <a className='uppercase underline text-teal-200' href = "mailto: abc@example.com">JOHNSON.ROSCOEA@gmail.com</a> </h2>
 




    </div>
    

 <div className='grid grid-cols-1 sm:grid-cols-1 w-full  m-auto   text-gray-500 gap-16 dark:text-gray-400   text-2xl  h-full  p-16  text-left'>


<div className='flex  flex-col gap-8 items-start  '>



<p className='first-letter:text-3xl first-letter:text-teal-200 '>My name is Roscoe Johnson, I create secure stateful web applications, 
    
    templates, and web experiences for clients to engage and grow their business. </p>



<strong className='text-4xl'>
    Developer Details
    </strong>
    <p>I specialize in developing ideas into stateful applications. I develop front end templates for e-commerce and custom
        full stack applications.
    </p>

    <strong className='text-4xl'>
        Expertise
    </strong>

    <p>I have deep expertise in Firebase Express React Node.js (FERN) as well as Shopify e-commerce stack.
         I primarily use CSS (SCSS), Bootstrap, and Tailwind CSS for styling. </p>



    <div className='grid grid-cols-2 gap-3 m-auto text-3xl'>
    <strong className='text-5xl'>
        Skills
    </strong>
        <div>Javascript</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>Express</div>
        <div>React.JS</div>
        <div>Node.JS</div>
        <div>Firebase Realtime Database</div>
        <div>PostgreSQL</div>
        <div>REST APIs</div>
        <div>Context API</div>
        <div>Vite</div>
        <div>Tailwind CSS</div>
        <div>Bootstrap</div>
        <div>SCSS</div>
        <div>Oauth Authentication</div>
        <div>JEST</div>
        <div>Java</div>
        <div>Python</div>
        <div>NPM</div>
        <div>Shopify CLI/Liquid</div>
        <div>Z Shell (zsh)</div>
        
        </div>

         <strong className='text-4xl'>
        Education 
    </strong>

<p> MS Systems Engineering University of Southern California (<a className='text-red-800'>USC </a> <a className='text-yellow-400'>2016</a>)</p>

</div>


 </div>



 

 
    </div>
  )
}

export default About