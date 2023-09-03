
import './App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import linkSource from './components/linkSource';
function App() {
 const [background,updateBackground]= useState("none");
 const [currentHover,updateCurrentHover]= useState("none");
 


const buttonNames= {stacky:"Current Stack",
apl:"Johns Hopkins APL",
usc:"USC",
hnh:"Head and Heart Media",
ng:"Northrop Grumman",
shop:"Shopify Templates"

}

const buttonPaths= {
apl:"experience/",
usc:"about/",
hnh:"projects/hnh",
ng:"experience/",
shop:"projects/shop"

}
  const changeBack = (e)=>{   
    if(Object.keys(linkSource).includes(e.target.id)){
      updateBackground(linkSource[e.target.id]);
      updateCurrentHover(e.target.id);
    } 
  }

  const setBackOriginal = ()=>{   
    updateBackground("none");
    updateCurrentHover("none");
  }

  return (
   <div className='grid  w-5/6 font-mono text-2xl h-screen mx-auto justify-content content-center'>

  <div className='absolute  top-0 left-0 -z-10 sm:h-0 md:h-full w-full '  style={{backgroundImage:`url(${background})`,
  opacity:"70%",
  backgroundSize: "cover",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"50% 50%",


}}
 > 
  </div>  
    <div className=" flex animate-reveal-text justify-center flex-col lg:flex-row   bg-transparent ">
    {Object.keys(buttonNames).slice(0,4).map((name,index)=>{

return (
       
  <Link  to={buttonPaths[name]} id={name} key={index}  onMouseOver={changeBack} onMouseLeave={setBackOriginal}  className={` ${(name!==currentHover && currentHover!=="none") ? "blur-md":""} w-full  bg-transparent px-6  py-2 rounded  text-white `} type="button" >
  {buttonNames[name]}
</Link>
)

    })}

</div>
<div className='flex items-center  flex-col animate-reveal-antitext lg:flex-row  bg-transparent '>
{Object.keys(buttonNames).slice(4).map((name,index)=>{
return (
  <Link to={buttonPaths[name]} id={name} key={index}  onMouseOver={changeBack} onMouseLeave={setBackOriginal}  className={` ${(name!==currentHover && currentHover!=="none") ? "blur-md":""} w-full bg-transparent px-6 py-2 rounded  text-white `} type="button" >
  {buttonNames[name]}
</Link>
)

    })}
       
</div>
<Link to ="/projects">
<button  className="w-full text-3xl px-6 py-2 rounded mt-16 bg-transparent text-white hover:overline animate-reveal-fadertext" type="button" >
        View All Projects
        </button>
</Link>


</div>

     
  )

  }
export default App
