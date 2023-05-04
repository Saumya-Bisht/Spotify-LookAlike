import React ,{useState,useEffect}from 'react'


function Search() {
  const [inp, setInp] = useState('');
  const [butonval,setButonval]=useState(inp)
  const[button,setButton]=useState([]);
  const[vid,setVid]=useState([]);

  // console.log(inp)
  // console.log(vid,"maindata");
  // console.log(butonval)


  // useEffect(()=>{
  //         fetch(`https://spotify23.p.rapidapi.com/search/q`,{
  //             method:"GET",
  //   params: {
  //     q: {inp},
  //     type: 'multi',
  //     offset: '0',
  //     limit: '10',
  //     numberOfTopResults: '5'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': 'a98303e574mshe82f233018356a4p116743jsn6f888c45505f',
  //     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  //   }
  //         }).then((res)=>res.json()).then((data)=>{setVid(data);console.log(data)})
  //     },[])


      let psty={
        color:"gray",
        fontWeight:"light",
        marginTop:"-7%",
        
      }

 
  useEffect(()=>{
      async function datafetch(){
        const url = `https://spotify23.p.rapidapi.com/search/?q=${butonval}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '87fa792f96msh89f87e9bcf7ac40p11313ajsnc767ab8e53ee',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  setVid(result)
  // console.log(vid);
  // console.log(result)
	
} catch (error) {
	console.error(error);
}
      }
    datafetch()
  },[butonval])
  const show=()=>{
// if(inp!==""){
//      setButton(<div  style={{display:"flex",flexWrap:"wrap"}} >
//           {vid.episodes.items.map((ele)=>{
//             return <div style={{boxShadow:"0px 0px 10px 3px #121212",borderRadius:"10px",padding:"10px",margin:"10px",width:"13vw",display:"flex",flexDirection:"column"}}>
//               <img  width="100%" src={ele.data.coverArt.sources[1].url} alt="img"/>
//               <p>{ele.data.name}</p>
//               {/* <p style={psty}>{ele.data.uri}</p> */}
//               <p style={psty}>{ele.data.contentRating.label}</p>
//               </div>
//           })}
//      </div>)}
//      else{
//       setButton(<h1>
//         Search for some trending Tracks...
//       </h1>)
//      }
    //  console.log(vid)

    // setButton(inp)
   if(inp!==""){
    setButonval(inp)
    setButton(<div style={{display:"flex",flexWrap:"wrap"}}>
      {vid.tracks.items?.map((ele)=>{
        return <div style={{boxShadow:"0px 0px 10px 3px #121212",borderRadius:"10px",padding:"10px",margin:"10px",width:"13vw",display:"flex",flexDirection:"column"}}>
          <img width="100%" src={ele.data.albumOfTrack.coverArt.sources[2].url} alt="img"/>
          <p>{ele.data.albumOfTrack.name}</p>
          <p style={psty}>{ele.data.artists.items[0].profile.name}</p>
        </div>
      })}
    </div>)}
    else{
      setButton(<h1>
               Search for some trending Tracks...
           </h1>)
    }
  }
  const clear=()=>{
   setButton([])
   setInp("")

  }
  // console.log(inp)
  return (
    <div  style={{}}>
        <h1>Search For Some Trending Tracks!😉</h1>
        <p style={{color:"black",fontSize:"13px"}}>"NOTE:If the search button does not give suitable results,then try clicking it more than 1 time."</p>
        <input value={inp} onChange={(e)=>setInp(e.target.value)} style={{width:"30vw",height:"30px",borderRadius:"20px",border:"0"}} type='text' placeholder=' 🔍 What do you want to listen to!?'/>
        <button style={{backgroundColor:"white",border:"1px solid white",marginLeft:"5px",fontWeight:"bold",cursor:"pointer"}} onClick={show}>Search</button>
        <button style={{backgroundColor:"white",border:"1px solid white",marginLeft:"5px",fontWeight:"bold",cursor:"pointer"}} onClick={clear}>Clear</button>
        <div>
           {button}
        </div>
    </div>
  )
}

export default Search