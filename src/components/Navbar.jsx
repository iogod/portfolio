import React from "react";
import { Link, Outlet, useLocation  } from "react-router-dom";
import { useState } from "react";
function Navbar() {

let currenLocation= useLocation().pathname;

let  mainRoutes= [{path:"/", name:"Home"},{path:"/projects", name:"Projects"},{path:"/experience", name:"Experience"},{path:"/about", name:"About"}];
const [isOpen,setOpen]= useState(false);
  return (
    <div className="" >
<div className="  w-full bg-transparent p-6">

<div className="block  lg:hidden mb-3 ">
    <button onClick={()=>{
      setOpen(!isOpen);
    }} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-200 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>

  <div className={`flex w-full flex-col justify-start items-start lg:flex-row  lg:justify-end  lg:visible ${isOpen   ? "collapse": "visible"} `}>

    { mainRoutes.map((val,index)=>{
return (    
  <Link key={index} to={mainRoutes[index].path} className={`font-mono lg:text-3xl  sm:text-xl  text-white hover:text-teal-200 mr-4 overline ${currenLocation===mainRoutes[index].path ?"overline":"no-underline"}`}> {mainRoutes[index].name}
  </Link>
)

    }) }
   
  

  </div>
</div>

<Outlet/>
</div>
  );
}

export default Navbar;
