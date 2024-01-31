import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import HomeImage from "../assets/images/river.png"
import FirstPartHome from "../components/FirstPartHome";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home (){
    return(
        <>
        <Navbar/>
        <Hero 
            cName = "hero"
            // heroImg = "https://images.unsplash.com/photo-1610413341456-e283a1c6026f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            heroImg = {HomeImage}
            title = "Transform your life, find peace"
            text = "Choose Your Favourite Retreat"
            buttonText = "Retreat Plans"
            url = "/ayahuascaRetreats"
            btnClass = "show"
        />
        <FirstPartHome/>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Home;