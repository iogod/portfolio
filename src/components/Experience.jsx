import React from 'react'
import { useState } from 'react'
import linkSource from './linkSource'
function Experience() {
        const expSource= {
            hnh:{title:"IOG Desgins",
                years:"2022 - Current",
                role:"Full Stack Developer",
                description:"I create applications, templates, and web experiences for clients to engage and grow their business. Using JS frameworks to deliver custom solutions, Firebase Express React Node.JS (FERN) are the base of my stack"
                         },
                         ng:{title:"Northrop Grumman",
                         years:"2021 - 2022",
                         role:"Principal Systems Engineer",
                         description:"System design and requirement decomposition for ground space systems"
                                  },
                                  apl:{title:"Johns Hopkins University Applied Physics Laboratory",
                                  years:"2017 - 2021",
                                  role:"Web Developer/Systems Engineer",
                                  description:"Created Guided User Interfaces for radar communication systems. Analyzed radar system processing from the combat system's perspective building plots, tools, widgets, and parsers"
                                           }}

            const [details,updateDetail]= useState(null);
            const [firstResponder,updateFirstResponder]= useState(null);

            const handleDetailUpdate = (name)=>{

                updateDetail(expSource[name].description);
                updateFirstResponder(name);
            }
    
  return (
    <div className='text-white grid mt-7 h-screen'>
       

    <div className='flex w-full gap-4 items-center mb-2   text-gray-500 dark:text-gray-400 text-2xl justify-start flex-col'>
    
    <div>
    
   
   
    <div className='p-20 sm:p-10 lg:w-3/5 text-slate-100 animate-reveal-fadertext m-auto'>
    {details}
    </div>
  
    </div>
    <h2 className='mt-2 text-teal-200'>
   {firstResponder? null:"Click an Experience" }
    </h2> 
 
    
      {Object.keys(expSource).map((ele,index)=>{

                        return (
                        
                          
  <div id={ele} onClick={()=>handleDetailUpdate(ele)}  key={index} className={` w-full lg:w-2/5 sm:m-2 text-center text-white rounded-md  border-4   hover:border-slate-400 sm:text-lg font-mono text-2xl text-bold min-h-max ${firstResponder===ele? "border-8 border-teal-200":""} `} style={{backgroundImage:`url(${linkSource[ele]})`,
 opacity:"90%",
 minHeight:"125px",
 maxWidth:"95%",
 backgroundSize: "cover",
 backgroundRepeat:"no-repeat",
 backgroundPosition:"25% 10%",
 
 
 }}>
        
        <div className='flex w-full  relative justify-center text-white items-center text-2xl sm:text-xl flex-col'>
        <div className='font-bold' >  {expSource[ele].title} </div>
        <div >  {expSource[ele].years} </div>
        <div>  {expSource[ele].role} </div>
         <button className={`absolute right-2 top-1/3 text-3xl ${firstResponder!==ele ? "animate-pulse":"text-teal-200  -rotate-45 "}`} > {">"} </button>
            </div>
       
        </div>

                        )

      })} 
   


    </div>

    </div>
  )
}
export default Experience