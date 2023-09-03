import React, { useState } from "react";
import dataSource from "./datasource";
import { Link } from "react-router-dom";
import hnh from "../assets/hnh1.png";
import appStore from "../assets/appstorereal.png";
import shop from  "../assets/shopremove.png";
const Projects = () => {
 
    const cardStyles ={
   width:'100%',
   height:'100%',
   maxHeight:"775px",
    maxWidth:"350px",
   minHeight:"400px",
   minWidth:'200px'
    }
   const images= [hnh,shop,appStore];

   const description= ["Head and Heart Media Group Full Stack Application that features authentication, messaging, and  hosted media assets",
"Shopify Theme for merchants starting their business with a pre-made webpage connecting the front end theme to a robust e-commerce solution",
"Fitness Full Stack Application that will be adapted for mobile users"];
  
    return (
     
               <div className="h-screen w-full grid mt-8 font-sans items-center justify-center    ">

              
            <div className=" grid w-full h-full gap-5   grid-rows-1 lg:grid-cols-4 lg:mt-72  sm:grid-cols-1 last:mb-20 text-teal-200">
           
            <div className="lg:text-5xl   md:text-4xl sm:text-4xl overline m-auto text-normal ">
            Current Projects
          </div>
             { Object.keys(dataSource).map((ele,index)=>{

                return (
            
  <div key={index} className="rounded-md relative lg:animate-drop-swaggy bg-slate-900 border border-gray-200 hover:bg-slate-300 " style={cardStyles} >
    <img className="rounded-sm bg-white h-2/5 w-full" src={images[index]}></img>
    <Link className="absolute top-0 left-0 w-full h-full bg-transparent z-20" to={`/projects/${ele}`}></Link>
<h5 className="text-left p-3 lg:text-3xl md:text-xl sm:text-xl font-bold  text-gray-900 dark:text-white hover:text-teal-200 ">
{dataSource[ele].company}
  </h5>  
  <p className="text-center lg:text-2xl md:text-xl sm:text-xl p-2 mt-1 font-normal text-gray-700 dark:text-gray-400">
    {description[index]}
    </p>
    <svg className="fill-teal-200 animate-pulse  text-bold absolute bottom-0 right-1 z-10" width="42" height="42" xmlns="http://www.w3.org/2000/svg"  ><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                    </div>
                )

             })

             }


               
            </div>
          
            </div>
           
            
    )
}
export default Projects;