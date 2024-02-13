import "./FirstPartHomeStyless.css"

import HomeImg1 from "../assets/images/shipibo.png"
import HomeImg2 from "../assets/images/shaman.png"
import HomeImg3 from "../assets/images/anhc/plantaroja.jpg"
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
            text1 = "The Amazon Natural Healing Center is a traditional integrated healing and wellness center that is centered around natural ayahuasca and shamanic practices guided by indigenous shamans located in the Peruvian Amazon Rainforest about 90 minutes from Iquitos, at mile marker 75, on the way to Nauta. that offers intensive and spiritual ayahuasca retreats with female and male Shipibo healers."
            text2 = "We are committed to offering our guests the chance to access the ancient healing wisdom of the Shipibo people, while also assisting this distinctive culture in safeguarding its knowledge and heritage in the 21st century."
            img1 = {HomeImg3}
            img2 = {HomeImg2}
            />

<DestinationData
            className = "first-des-reverse"
            heading = "Journey to Transformation: A Profound Ayahuasca Retreat Experience"
            text1 = "-Miguel López-Torres 14 December 2023"
            text2 = "My experience at your ayahuasca retreat center was truly transformative and enriching. From the moment I arrived, I felt welcomed by the warmth and authenticity of the environment. The facilitation team demonstrated profound knowledge and respect for the ayahuasca tradition, guiding us with sensitivity throughout the entire process. The facilities were impeccable, creating a serene and safe atmosphere that facilitated immersion in the experience. The personalized attention and constant care from the staff made me feel supported at all times. The ayahuasca ceremony itself was a powerful and illuminating experience. The wisdom shared during the integration sessions was invaluable and significantly contributed to my personal growth process. The connection with the surrounding nature added a special dimension to the overall experience. I would highly recommend this center to anyone seeking an authentic and respectful ayahuasca journey. I deeply appreciate the opportunity to have had this experience at your center, and I am confident that others will also benefit greatly."

            // img1 = {HomeImg1}
            // img2 = {HomeImg2}
            img1 = {HomeImg1}
            img2 = "https://templeofthewayoflight.org/wp-content/uploads/2023/07/Holding_Safe_Ayahuasca_Ceremonies-scaled.jpg"
            />
        </div>
    );
};

export default FirstPartHome