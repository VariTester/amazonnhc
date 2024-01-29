import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import AyahuascaImage from "../assets/images/ayahuasca.png"

function Ayahuasca (){
    return(
        <>
        <Navbar/>
        <Hero 
            cName = "hero"
            // heroImg = "https://images.unsplash.com/photo-1570998401604-dc1cb6929fff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            heroImg = {AyahuascaImage}
            title = "Ready for the amazing experience?"
            text = "Choose Your Favourite Retreat Plan"
            // buttonText = "Retreat Plans"
            // url = "/"
            // btnClass = "show"
        />
        </>
    )
}

export default Ayahuasca;