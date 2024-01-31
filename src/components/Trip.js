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
                image = {Trip1}
                heading = "Ayahuasca with friends"
                text = "Embarking on an ayahuasca journey with friends was a truly profound and bonding experience. Sharing the transformative power of the medicine together created a unique connection, as we navigated the depths of our consciousness and supported each other through introspective moments. The shared insights and post-ceremony reflections deepened our friendships, fostering a sense of unity and understanding that will resonate with us for a lifetime. The collective energy and mutual support made the ayahuasca experience even more enriching and memorable"
                />

<TripData
                image = {Trip2}
                heading = "Ayahuasca with friends"
                text = "Embarking on an ayahuasca journey with friends was a truly profound and bonding experience. Sharing the transformative power of the medicine together created a unique connection, as we navigated the depths of our consciousness and supported each other through introspective moments. The shared insights and post-ceremony reflections deepened our friendships, fostering a sense of unity and understanding that will resonate with us for a lifetime. The collective energy and mutual support made the ayahuasca experience even more enriching and memorable"
                />

<TripData
                image = {Trip3}
                heading = "Ayahuasca with friends"
                text = "Embarking on an ayahuasca journey with friends was a truly profound and bonding experience. Sharing the transformative power of the medicine together created a unique connection, as we navigated the depths of our consciousness and supported each other through introspective moments. The shared insights and post-ceremony reflections deepened our friendships, fostering a sense of unity and understanding that will resonate with us for a lifetime. The collective energy and mutual support made the ayahuasca experience even more enriching and memorable"
                />
            </div>
        </div>
    )
}
export default Trip;