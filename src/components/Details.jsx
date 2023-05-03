import React,{useState,useEffect} from 'react'
import { MdOutlineWatchLater} from 'react-icons/md';

function Details() {

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
    let tstyle={
        border:"1px solid black",
        width:"100%",
        textAlign:"left",
            }
            let he={
                textAlign:"center"
            }
            
  return (
    <div>
        <h1>Your Library</h1>
        <table style={tstyle}>
            <tr style={tstyle}>
                <th style={he}>#</th>
                <th style={he}>Title</th>
                <th style={he}>Album</th>
                <th style={he}><MdOutlineWatchLater/></th>
            </tr>
            <tr>
                <td style={{ borderSpacing: "60px"}}>{vid.tracks.items.map((ele,ind)=>{
                    return <tr>{ind+1}</tr>
                })}</td>
                <td style={{borderSpacing: "15px"}}>{vid.tracks.items.map((ele)=>{
                    return (<tr>
                        <div style={{display:"flex",width:"80%",justifyContent:"space-between"}}>
                            <img  width="50" src={ele.data.albumOfTrack.coverArt.sources[0].url} alt="img"/>
                            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",width:"60%"}}>
                            <p style={{fontSize:"smaller"}}>{ele.data.name}</p>
                            <p style={{color:"gray",fontSize:"smaller",marginTop:"-10px"}}>{ele.data.artists.items[0].profile.name}</p>
                            </div>
                        </div>
                        </tr>)
                })}</td>
                <td style={{color:"gray", borderSpacing: "60px"}}>{vid.tracks.items.map((ele)=>{
                    return <tr>{ele.data.name}</tr>
                })}</td>
            
                <td style={{color:"gray", borderSpacing: "60px"}}>{vid.tracks.items.map((ele)=>{
                    return <tr>{((ele.data.duration.totalMilliseconds)/60000).toFixed(2)} M</tr>
                })}</td>
            </tr>
        </table>
    </div>
  )
}

export default Details