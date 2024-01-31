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
            className = "first-des"
            heading = "Ayahuasca Retreats at Amazon Natural Healing Center"
            text1 = "The Amazon Natural Healing Center is a traditional natural plant-medicine shamanic healing center located in the Peruvian Amazon Rainforest that offers intensive and spiritual ayahuasca retreats with female and male Shipibo healers."
            text2 = "We are dedicated to providing our guests with the opportunity to benefit from the ancient healing wisdom of the Shipibo people, and to helping this unique culture preserve its knowledge and identity in the 21st Century."
            img1 = {HomeImg1}
            img2 = {HomeImg2}
            />

<DestinationData
            className = "first-des-reverse"
            heading = "Journey to Transformation: A Profound Ayahuasca Retreat Experience"
            text1 = "-Miguel López-Torres 14 December 2023"
            text2 = "My experience at your ayahuasca retreat center was truly transformative and enriching. From the moment I arrived, I felt welcomed by the warmth and authenticity of the environment. The facilitation team demonstrated profound knowledge and respect for the ayahuasca tradition, guiding us with sensitivity throughout the entire process. The facilities were impeccable, creating a serene and safe atmosphere that facilitated immersion in the experience. The personalized attention and constant care from the staff made me feel supported at all times. The ayahuasca ceremony itself was a powerful and illuminating experience. The wisdom shared during the integration sessions was invaluable and significantly contributed to my personal growth process. The connection with the surrounding nature added a special dimension to the overall experience. I would highly recommend this center to anyone seeking an authentic and respectful ayahuasca journey. I deeply appreciate the opportunity to have had this experience at your center, and I am confident that others will also benefit greatly."

            img1 = {HomeImg1}
            img2 = {HomeImg2}
            />
        </div>
    );
};

export default FirstPartHome