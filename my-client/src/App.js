
import './App.css';
import Navbar from './components/Navi';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
         <Route path="/" exact element={<Home/>}/>    
      </Routes>
      </Router>
       
       
    </div>
  );
}

export default App;
