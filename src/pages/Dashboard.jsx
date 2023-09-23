import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
// import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineDoubleRight} from 'react-icons/ai';
import { useState } from "react";

import Sidebar from "../components/core/Dashboard/Sidebar"


function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const [toggle,setToggle] = useState(true);

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] w-screen">
     <AiOutlineDoubleRight className={`text-white absolute top-4 left-4 z-10  cursor-pointer ${toggle ? 'rotate-180' :'rotate-0 '} transition-[0.3s] `}
        onClick={()=> {
          setToggle(!toggle);
         
        }}
     />
    {toggle ? (
      <div className="relative flex min-h-[calc(100vh-3.5rem)] w-screen">
      <Sidebar />
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>

   
    
    
    ):( 
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    )}
     
      
    </div>
  )
}

export default Dashboard
