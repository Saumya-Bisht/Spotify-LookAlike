import React from 'react'
import { RiArrowLeftSLine,RiArrowRightSLine } from 'react-icons/ri';

function Navbar() {
    let arrowstyle={
        color:"white",
        backgroundColor:"black",
        borderRadius:"50%",
        border:"0",
        height:"2.5rem",
        fontSize:"1.5rem",
        padding:"8px",
        cursor:"pointer"
    }
  return (
    <div style={{backgroundColor:" #1a1a1a",marginLeft:"0%",height:"5vh",width:"78vw",display:"flex",position:"sticky",top:"0",justifyContent:"space-between",padding:"15px"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"6.5vw"}}><button style={arrowstyle} > <RiArrowLeftSLine/> </button>
        <button style={arrowstyle}><RiArrowRightSLine/> </button></div>
        <div style={{display:"flex",width:"18%",justifyContent:"space-between"}}>
        <button style={{color:"gray",
        cursor:"pointer",backgroundColor:"#1a1a1a",border:0,fontSize:"1rem",fontWeight:"bold"}}>Sign Up</button>
        <button style={{backgroundColor:"white",
        cursor:"pointer",border:0,width:"50%",borderRadius:"20px",fontWeight:"bold",fontSize:"0.9rem"}}>Log In</button>
        </div>
    </div>
  )
}

export default Navbar