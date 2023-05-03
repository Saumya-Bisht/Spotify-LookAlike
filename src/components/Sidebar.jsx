import React from 'react'
import {Link} from 'react-router-dom'
import { MdOutlineHome,MdOutlineSearch,MdLibraryMusic,MdOutlineCreateNewFolder} from 'react-icons/md';
import{FcLike} from 'react-icons/fc'

function Sidebar() {
  return (
    <div style={{width:"30vw",height:"100vh",backgroundColor:"black",display:"flex",flexDirection:"column",textAlign:"left",padding:"30px",position:"sticky",top:"0"}}>
        <img width="100%" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="logo"/>
        <div >
            <Link className='links' to="/"><h3><MdOutlineHome/> Home</h3></Link>
            <Link className='links' to="/search"><h3><MdOutlineSearch/> Search</h3></Link>
            <Link className='links' to="library"><h3><MdLibraryMusic/> Your Library</h3></Link>
        </div>
        <div>
           <Link className='links' to="/search"> <h3><MdOutlineCreateNewFolder/> Create PLaylists</h3></Link>
            <Link className='links' to="/library"><h3><FcLike/> Liked Songs</h3></Link>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",height:"30vh",marginTop:"35%"}}>
          <span>Legal</span>
          <span>Privacy Center</span>
          <span>Privacy Policy</span>
          <span>Cookies</span>
          <span>About Ads</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>Cookies</span>
        </div>
    </div>
  )
}

export default Sidebar