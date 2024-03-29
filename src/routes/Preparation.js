import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AyahuascaImage from "../assets/images/rio.jpg"
import PreparationData from "../components/PreparationData";

function Preparation (){
    return(
        <>
        <Navbar/>
        <Hero 
            cName = "hero-mid"
            // heroImg = "https://images.unsplash.com/photo-1570998401604-dc1cb6929fff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            heroImg = {AyahuascaImage}
            title = "Prepare yourself"
            text = "The diet, deepening your experience, advices"
            // buttonText = "Retreat Plans"
            // url = "/"
            // btnClass = "show"
        />
        <PreparationData/>
        <Footer/>
        </>
    )
}

export default Preparation;