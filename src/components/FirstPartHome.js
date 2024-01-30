import "./FirstPartHomeStyless.css"

import HomeImg1 from "../assets/images/shipibo.png"
import HomeImg2 from "../assets/images/shaman.png"
import HomeImg3 from "../assets/images/logo.png"
import HomeImg4 from "../assets/images/logo.png"

const FirstPartHome = () =>{
    return(
        <div className="firsPartHome">
            <h1>Ancient Medicine in a Modern World</h1>
            <p>healing and self-discovery</p>
            <div className="first-des">
                <div className="des-text">
                    <h2>Ayahuasca Retreats at Amazon Natural Healing Center</h2>
                    <p>
                     The Amazon Natural Healing Center is a traditional natural plant-medicine shamanic healing center located in the Peruvian Amazon Rainforest that offers intensive and spiritual ayahuasca retreats with female and male Shipibo healers.
                    </p>
                    <p>
                    We are dedicated to providing our guests with the opportunity to benefit from the ancient healing wisdom of the Shipibo people, and to helping this unique culture preserve its knowledge and identity in the 21st Century. 
                    </p>
                </div>
                <div className="image">
                    <img alt="img" src={HomeImg1}/>
                    <img alt="img" src={HomeImg2}/>
                </div>
            </div>
        </div>
    );
};

export default FirstPartHome