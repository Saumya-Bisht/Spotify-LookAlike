import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

function Home() {
    let[vid,setVid]=useState({})
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
    'X-RapidAPI-Key': 'a7cd13a03bmsh2a04d106eaead2dp1c6c2fjsn4a7170c7091d',
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
  return (
    <div style={{backgroundColor:"#212121"}}>
        <h2>Popular Playlists</h2>
        {console.log(vid)}
         <div style={{display:"flex",flexWrap:"wrap"}}>{vid.playlists.items?.map((ele)=>{
            return (<div style={{boxShadow:"0px 0px 10px 3px #121212",borderRadius:"10px",padding:"10px",margin:"10px",width:"13vw",display:"flex",flexDirection:"column"}}>
            <Link style={linksty} to="/details"><img  width="100%" src={ele.data.images.items[0].sources[0].url} alt="img"/>
               <p> {ele.data.name} </p>
               <p style={psty}>{ele.data.owner.name}</p></Link>
               </div>
               
               
               )
        })}</div>

        <h2>Popular Podcasts</h2>
        <div style={{display:"flex",flexWrap:"wrap"}}>{vid.podcasts.items?.map((ele)=>{
            return (<div style={{boxShadow:"0px 0px 10px 3px #121212",borderRadius:"10px",padding:"10px",margin:"10px",width:"13vw",display:"flex",flexDirection:"column"}}>
            <Link style={linksty} to="/details"><img width="100%" src={ele.data.coverArt.sources[1].url} alt="img"/>
               <p> {ele.data.name} </p>
               <p style={psty}>{ele.data.publisher.name}</p></Link>
               </div>
               
               
               )
        })}</div>

<h2>Popular Artists</h2>
        <div style={{display:"flex",flexWrap:"wrap"}}>{vid.artists.items?.map((ele)=>{
            return (<div style={{boxShadow:"0px 0px 10px 3px #121212",borderRadius:"10px",padding:"10px",margin:"10px",width:"13vw",display:"flex",flexDirection:"column"}}>
           <Link style={linksty} to="/details"> <img style={{borderRadius:"50%"}} width="100%" src={ele.data.visuals.avatarImage.sources[0].url} alt="img"/>
               <p> {ele.data.profile.name} </p></Link>
              
               </div>
               
               
               )
       })}</div> 
     
    </div>
  )
}

export default Home