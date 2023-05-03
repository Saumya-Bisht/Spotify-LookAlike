import React ,{useState,useEffect}from 'react'


function Search() {
  const [inp, setInp] = useState('');
  const[button,setButton]=useState([]);
  const[vid,setVid]=useState([]);


  useEffect(()=>{
          fetch("https://spotify23.p.rapidapi.com/search/?q=~${inp}",{
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

  const show=()=>{
     setButton(inp)
     console.log(vid)
  }
  const clear=()=>{
   setButton([])
   setInp("")

  }
  // console.log(inp)
  return (
    <div  style={{}}>
        <h1>Search component</h1>
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