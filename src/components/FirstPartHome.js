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
            buttonText = "more..."
            url = "/aboutUs"
            btnClass = "show"
            />

<DestinationData
            className = "first-des-reverse"
            heading = "Ayahuasca Preparation Guidelines: A Profound Ayahuasca Healing Retreat Experience"
            text1 = "Our primary focus is on providing a secure, safe, and sacred environment for you to experience deep healing and life transformation. Prioritizing ayahuasca preparation before your journey to the Amazon is a crucial aspect of the healing process; setting a clear intention and ensuring that you prepare your body and mind in the best possible way to receive profound healing. Healing often initiates even before you embark on your journey!"
            text2 = "The maloka can be likened to a spiritual hospital where profound energetic and spiritual healing takes place through sessions in each ceremony. This work is carried out not only by the healers but also by a multitude of plant-spirit doctors who are invoked by the healers, including the spirit of ayahuasca. Ayahuasca shamanism involves a triangular relationship between the healer, ayahuasca, and the plant spirits. Without the involvement of the plant spirits (and the relationship established by the healer with them), healing cannot address the energetic roots of imbalance, trauma, lack of well-being, and illness. Therefore, it is crucial to prepare with ayahuasca before embarking on a process of (spiritual surgery). The more effort and dedication invested in the preparation, the greater the likelihood of experiencing positive and lasting healing results."
            
            buttonText1 = "more..."
            url1 = "/preparation"
            btnClass1 = "show"
            // img1 = {HomeImg1}
            // img2 = {HomeImg2}
            img1 = {HomeImg1}
            img2 = "https://templeofthewayoflight.org/wp-content/uploads/2023/07/Holding_Safe_Ayahuasca_Ceremonies-scaled.jpg"
            />
        </div>
    );
};

export default FirstPartHome