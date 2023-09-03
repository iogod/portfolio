
import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import linkSource from './linkSource'
import dataSource from './datasource';
import { useState } from 'react';

function ProjectDetail() {
    const accepts = Object.keys(linkSource);
    const [ time, updateTime] = useState({title:"Updating"});
    let name= useParams().proj;

useEffect(()=>{
 //interval will be set each 500 ms block and removed on the "unmount" with the return closing block
 let diffTime= (dataSource[name].finishDate.getTime()-new Date().getTime()); //get time diff to present to countdown 
    let output= formatTime(diffTime);
  
const timerID = setInterval(()=>{
   updateTime(output);
},1000)
return () => clearInterval(timerID);

},[time])
    


function formatTime(tdiff) {
    if(tdiff<=0){
        return {title:"Released!"}
    }
    let total= tdiff/1000;
    let days= Math.floor(total/(24*60*60)) //24 hours 60 minutes in hour 60 seconds in minute
    total= total%(24*60*60);
    let hours = Math.floor(total/(60*60));
    total= total%(60*60);
    let mins= Math.floor(total/60);
    let seconds= Math.floor(total%60);
    
    let output= {title:"valid",
        days:days,
        hours:hours,
        minutes:mins,
        seconds:seconds
    }
    return output;

}

const Status = ()=>{

    return (
        <div className='flex  rotate-90 mt-14 md:rotate-0 md:mt-0 lg:rotate-0 lg:mt-0 items-center justify-center '>
        <div role="status" className="max-w-sm pl-12 w-full animate-pulse ">

    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[280px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[280px]"></div>
    <span className="sr-only">Loading...</span>
</div>
</div>
    )
}

 return (
    
    <div className="text-white">
        {accepts.includes(name) ?  (
            <div className='grid  grid-rows-1  justify-center gap-0'>  

    

                <a className="  flex w-full  justify-center items-center  "href={dataSource[name].link===""?null:dataSource[name].link}><img className='object-contain w-2/3 h-2/3   '  style={{minHeight:"300px",minWidth:"350px"}}  src={linkSource[name]}></img></a>
                {time.title ==="Updating" && <Status /> }
                {time.title !=="Released!" && time.title !=="Updating"  ? (     <div className="grid  mt-3 sm:grid-flow-col justify-center gap-7 text-center  ">
<div className="flex text-3xl sm:text-2xl flex-col">
<span className="countdown  font-mono ">
  {time.days} 
</span>
days
</div> 
<div className="flex text-3xl sm:text-2xl  flex-col">
<span className="countdown font-mono ">
  {time.hours}
</span>
hrs
</div> 
<div className="flex  text-3xl sm:text-2xl  flex-col">
<span className="countdown font-mono ">
{time.minutes}
</span>
min
</div> 
<div className="flex text-3xl sm:text-2xl text-teal-200 animate-clock-play flex-col">
<span className="countdown  font-mono ">
  {time.seconds}
</span>
sec
</div>
</div>):null}
{(time.title ==="Released!" ) ? (<div className='text-2xl text-mono mt-1 text-gray-500 dark:text-gray-400  '>Released! Click the image above to check it out</div>): null}
 <div className='text-2xl  text-slate-100 animate-reveal-fadertext   lg:w-1/2 mx-auto md:text-center sm:text-left p-20 mb-1   '>
{time.title !== "Updating" && dataSource[name].description}
</div>

<div className='flex justify-center text-white'>



          {/* Do Flex Box Description Developer Content etc Credits */}
            </div>  
        
            </div>
        ): <div className='text-3xl'>
           Project Unknown 
            </div>}
    </div>
     
 )
}

export default ProjectDetail;