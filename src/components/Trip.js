import "./TripStyles.css"
import TripData from "./TripData"

import Trip1 from "../assets/images/shipibo.png"
import Trip2 from "../assets/images/shaman.png"
import Trip3 from "../assets/images/logo.png"

function Trip(){
    return(
        <div className="trip">
            <h1>Informative Videos</h1>
            <p>You can see the amazing experience</p>
            <div className="tripcard">
<TripData
                // image = {Trip1}
                image = "https://templeofthewayoflight.org/wp-content/uploads/2023/10/Temple_of_the_Way_of_Light_Retreat_Guests-49-1536x1229.jpg"
                heading = "Ayahuasca with friends"
                text = "Embarking on an ayahuasca journey with friends was a truly profound and bonding experience. Sharing the transformative power of the medicine together created a unique connection, as we navigated the depths of our consciousness and supported each other through introspective moments. The shared insights and post-ceremony reflections deepened our friendships, fostering a sense of unity and understanding that will resonate with us for a lifetime. The collective energy and mutual support made the ayahuasca experience even more enriching and memorable"
                />

<TripData
                // image = {Trip2}
                image = "https://templeofthewayoflight.org/wp-content/uploads/2023/10/Temple_of_the_Way_of_Light_Temple_Grounds-67-1536x864.jpg"
                heading = "Our Stand"
                text = "Traditional Amazonian plant-spirit healing offers a solution to the modern epidemic of depression, anxiety, and stress; encouraging a revolution in our healthcare systems, and in the way that society addresses mental health and the source of disease."
                />

<TripData
                // image = {Trip3}
                image = "https://templeofthewayoflight.org/wp-content/uploads/2023/10/Temple_of_the_Way_of_Light_Ceremonies-9-1024x684.jpg"
                heading = "Outside of Ayahuasca Ceremony"
                text = "Providing a nurturing and friendly atmosphere to support guests throughout their process is essential to helping them begin to integrate and process their experiences. We hold group sharings on certain days after ceremony, as part of a carefully designed daily program that treats your time out of ceremony with equal importance to your work inside of ceremony."
                />
            </div>
        </div>
    )
}
export default Trip;