import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

function Home() {
    let[vid,setVid]=useState({})
    let[butt,setButt]=useState([])
    useEffect(()=>{
        fetch("https://spotify23.p.rapidapi.com/search/?q=${q}&type=multi",{
            method:"GET",
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '87fa792f96msh89f87e9bcf7ac40p11313ajsnc767ab8e53ee',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
        }).then((res)=>res.json()).then((data)=>{setVid(data);console.log(data)})
    },[])
let linksty={
  color:"white",
  textDecoration:"none",
  fontWeight:"bold"
}
let psty={
  color:"gray",
  fontWeight:"light",
  marginTop:"-7%",
  
}

const loadata=()=>{
  setButt(<>
     <div style={{display:"flex",flexWrap:"wrap"}}>{Array.isArray(vid.playlists.items) && vid.playlists.items?.map((ele)=>{
            return (<div style={{boxShadow:"0px 0px 10px 3px #121212",borderRadius:"10px",padding:"10px",margin:"10px",width:"13vw",display:"flex",flexDirection:"column"}}>
            <Link style={linksty} to="/details"><img  width="100%" src={ele.data.images.items[0].sources[0].url} alt="img"/>
               <p> {ele.data.name} </p>
               <p style={psty}>{ele.data.owner.name}</p></Link>
               </div>
               
               
               )
        })}</div>

        <h2>Popular Podcasts</h2>
        <div style={{display:"flex",flexWrap:"wrap"}}>{Array.isArray(vid.podcasts.items) && vid.podcasts.items?.map((ele)=>{
            return (<div style={{boxShadow:"0px 0px 10px 3px #121212",borderRadius:"10px",padding:"10px",margin:"10px",width:"13vw",display:"flex",flexDirection:"column"}}>
            <Link style={linksty} to="/details"><img width="100%" src={ele.data.coverArt.sources[1].url} alt="img"/>
               <p> {ele.data.name} </p>
               <p style={psty}>{ele.data.publisher.name}</p></Link>
               </div>
               
               
               )
        })}</div>

<h2>Popular Artists</h2>
        <div style={{display:"flex",flexWrap:"wrap"}}>{Array.isArray(vid.artists.items) &&  vid.artists.items?.map((ele)=>{
            return (<div style={{boxShadow:"0px 0px 10px 3px #121212",borderRadius:"10px",padding:"10px",margin:"10px",width:"13vw",display:"flex",flexDirection:"column"}}>
           <Link style={linksty} to="/details"> <img style={{borderRadius:"50%"}} width="100%" src={ele.data.visuals.avatarImage.sources[0].url} alt="img"/>
               <p> {ele.data.profile.name} </p></Link>
              
               </div>
               
               
               )
       })}</div> 
  </>)
}
  return (
    <div style={{backgroundColor:"#212121"}}>
        <h2>Popular Playlists</h2>
        <button style={{backgroundColor:"white",border:"1px solid white",margin:"15px",fontWeight:"bold",cursor:"pointer"}} onClick={loadata}>Load Data</button>
        {console.log(vid)}
        <div>{butt}</div>
     
    </div>
  )
}

export default Home