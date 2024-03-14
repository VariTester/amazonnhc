import "./TripStyles.css"
import TripData from "./TripData"

import Trip1 from "../assets/images/shipibo.png"
import Trip2 from "../assets/images/shaman.png"
import Trip3 from "../assets/images/logo.png"

function Trip(){
    return(
        <div className="trip">
            <h1>Informative Videos</h1>
            <p>You can see the healing experience</p>
            <div className="tripcard">
                
<TripData
                // image = {Trip3}
                image = "https://www.youtube.com/embed/hn7eOdApwdM?si=4uMys5UAr4rMjGPg"
                heading = "The preparation of ayahuasca"
                text = "Preparing ayahuasca involves a sacred and meticulous process. It begins with the gathering of specific plant materials, typically including the ayahuasca vine (Banisteriopsis caapi) and other botanicals with psychoactive properties. These plants are then carefully cleaned, shredded, and brewed together in a ceremonial manner, often under the guidance of experienced shamans or healers. The brewing process can take several hours and is infused with intention, prayer, and reverence for the spiritual powers of the plants. Ayahuasca preparation is not merely a physical task but a sacred ritual that honors the interconnectedness of all living beings and seeks to establish a profound connection with the spiritual realms."
                />
<TripData
                // image = {Trip2}
                image = "https://www.youtube.com/embed/0t0nN3aWf5M?si=EbA_uXeHQgQAsTib"
                heading = "Icaros"
                text = "Healing, traditional, and ancestral singing with ayahuasca: is a practice involving singing during ayahuasca ceremonies. These songs, often called (icaros) in the Amazonian tradition, are sung by shamans or experienced practitioners during ayahuasca sessions to guide and facilitate the healing process. It is believed that these melodies possess healing and spiritual powers, intended to open energetic pathways, protect participants, and facilitate communication with plant spirits and the universe. Healing singing with ayahuasca is an integral part of the ceremonial experience and is considered a direct connection to the divine and the sacred."
                />

<TripData
                // image = {Trip1}
                image = "https://www.youtube.com/embed/ydt9wcfvT3M?si=9dAMJyHR1kD3YxEQ"
                heading = "What is AYAHUASCA?"
                text = "Ayahuasca is an ancient medicine used by Amazonian indigenous cultures since time immemorial. It is carefully crafted from the combination of the ayahuasca vine (Banisteriopsis caapi) and other select medicinal plants. This powerful spiritual medicine has been revered for its ability to heal the body, mind, and spirit. Many individuals have experienced profound transformations and miraculous healings through the visions and teachings provided by Ayahuasca. It is an invaluable tool for those seeking emotional, spiritual, and physical healing, offering a direct connection to the divine and a deeper understanding of oneself and the universe."
                />
            </div>
        </div>
    )
}
export default Trip;