import './App.css';
import './index.css'
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Mycomponent/Home';
import About from './Mycomponent/About';
import MyPortfulio from './Mycomponent/Myportfulio';
import ContactUs from './Mycomponent/Contactus';
function App() {
  
  return (
    
    <Router>
    <div className="App">
     <ul className='nav'>
       <li ><Link className='hhhhhq' to="/">Home</Link></li>
       <li><Link className='hhhhhq'  to="/about">About</Link></li>
       <li><Link className='hhhhhq' to="/my-portfulio">Portfulio</Link></li>
       <li><Link className='hhhhhq' to="/contact-us">Contact</Link></li>
     </ul>
    </div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/my-portfulio" element={<MyPortfulio />}></Route>
      <Route path="/Contact-us" element={<ContactUs />}></Route>
    </Routes>
    </Router>
    
  );
}

export default App;
