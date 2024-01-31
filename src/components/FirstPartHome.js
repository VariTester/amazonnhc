import "./FirstPartHomeStyless.css"

import HomeImg1 from "../assets/images/shipibo.png"
import HomeImg2 from "../assets/images/shaman.png"
import HomeImg3 from "../assets/images/logo.png"
import HomeImg4 from "../assets/images/logo.png"
import DestinationData from "./DestinationData"

const FirstPartHome = () =>{
    return(
        <div className="firsPartHome">
            <h1>Ancient Medicine in a Modern World</h1>
            <p>healing and self-discovery</p>
            <DestinationData
            heading = "Ayahuasca Retreats at Amazon Natural Healing Center"
            text1 = "The Amazon Natural Healing Center is a traditional natural plant-medicine shamanic healing center located in the Peruvian Amazon Rainforest that offers intensive and spiritual ayahuasca retreats with female and male Shipibo healers."
            text2 = "We are dedicated to providing our guests with the opportunity to benefit from the ancient healing wisdom of the Shipibo people, and to helping this unique culture preserve its knowledge and identity in the 21st Century."
            img1 = {HomeImg1}
            img2 = {HomeImg2}
            
            />
        </div>
    );
};

export default FirstPartHome