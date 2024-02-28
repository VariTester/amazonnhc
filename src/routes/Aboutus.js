import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AyahuascaImage from "../assets/images/selva2.jpg"
import AboutUsData from "../components/AboutUsData";

function About (){
    return(
        <>
        <Navbar/>
        <Hero 
            cName = "hero-mid"
            // heroImg = "https://images.unsplash.com/photo-1570998401604-dc1cb6929fff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            heroImg = {AyahuascaImage}
            title = "About Us"
            text = "Why are we the best choice for you?"
            // buttonText = "Retreat Plans"
            // url = "/"
            // btnClass = "show"
        />
        <AboutUsData/>
        <Footer/>
        </>
    )
}

export default About;