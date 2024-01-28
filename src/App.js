import "./styles.css"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/Aboutus";
import Ayahuasca from "./routes/Ayahuasca";
import Contact from "./routes/Contactus";
import Preparation from "./routes/Preparation";
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
      <Navbar/>
        




    </div>
  );
}