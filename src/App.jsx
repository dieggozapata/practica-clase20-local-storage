import './App.css'
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Details from './Pages/Details';
import NotFound from "./Pages/NotFound";
import {Routes,Route} from 'react-router-dom'
import hoteles from './hoteles.json'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path='/' element={<Home hoteles={hoteles}/>} />          
          <Route path='/details/:name' element={<Details hoteles={hoteles}/>} />          
          <Route path='*' element={<NotFound/>} />                    
      </Routes>        
    </div>
  )
}

export default App
