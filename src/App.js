import "./styles.css"
// import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/Aboutus";
import Ayahuasca from "./routes/Ayahuasca";
import Contact from "./routes/Contactus";
import Preparation from "./routes/Preparation";

import whatsapplogo from './assets/images/anhc/whatsapp.png'

export default function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutUs" element={<About/>}/>
        <Route path="/ayahuascaRetreats" element={<Ayahuasca/>}/>
        <Route path="/contactUs" element={<Contact/>}/>
        <Route path="/preparation" element={<Preparation/>}/>
      </Routes>


      <div className='whatsapp-button p-3'>
  <a href='https://wa.me/51992329593?text=Hi I need more information' target='_blank'>
    <img src={whatsapplogo} alt='WhatsApp' style={{ width: '60px', height: '60px' }} />
  </a>
</div>








    </div>
  );
}