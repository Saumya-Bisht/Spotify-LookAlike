import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Library from './components/Library';
import Details from './components/Details';



function App() {
  return (
    <div style={{color:"white",display:"flex",backgroundColor:"#212121"}} className="App">
      <Sidebar/>
      <div>
      <Navbar/>
      <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/library' element={<Details/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes></div>
      </div>
    </div>
  );
}

export default App;
