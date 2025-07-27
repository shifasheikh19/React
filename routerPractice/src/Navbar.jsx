import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
   <>
   <nav>
    <NavLink className={(e)=>{
        return e.isActive?"red":""
    }} to="/">Home</NavLink>
    <NavLink className={(e)=>{
        return e.isActive?"red":""
    }}to="/About">About</NavLink>

   </nav>
   
   
   </>
  )
}

export default Navbar