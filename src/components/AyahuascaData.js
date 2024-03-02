import React from 'react'
import './AyahuascaData.css'
import Side from './sideContent/Side'
import img1 from '../assets/images/logo.png'
import img2 from '../assets/images/anhc/team.jpg'
import Heading from './heading/Heading'
import SocialMedia from './sideContent/SocialMedia'
import Fpost from './fpost/Fpost'
import Face from './facebook/Face'
import Comments from './comments/Comments'
import SideDiet from './sideContent/SideDiet'
const AyahuascaData = () => {
  return (
    <>
        <main>
        <div className='container'>
        <section className='mainContent details'>
            <h1 className='title'>The prices and package</h1>

            <div className='author'>
                <p>The minimum stay is 2 nights due to transportation logistics.</p>
            </div>

            <div className='desctop'>
                <p>$265 USD per person, per night, double occupancy. Single occupancy is $295 USD per person, per night. You can pay in advance half of the price you chose through PayPal or Western Union and cancel the other half when we pick you up from your hotel. The full amount is due in USD and canceled at the moment of picking you up from your hotel.</p>
                <p>Price includes pickup and return to hotel in Iquitos, transportation to and from lodge, healthy food corresponding to ayahuasca diet, pre-ayahuasca chanting, ayahuasca ritual ceremony, and guided journey by indigenous shaman, subsequently a flower bath to relax the body, soul, and spirit. The following morning, the shaman will help interpret your visions in terms of meaning and relevancy.</p>
                <p>Ayahuasca ceremonies are conducted in the maloka (Large and rustic house where mosquitoes and other types of insects cannot enter), perfectly conditioned for the ceremony to ensure comfort and safety, which is located a two-minute walk from your bungalow. The ayahuasca used is harvested and prepared according to authentic and timeless traditions of indigenous shamans. This is to ensure the efficacy and purity of the brew. It is not pre-bought in markets or tourist places, where no one really knows what went into the concoction.</p>
            </div>

            {/* <img src={img2} alt=''/> */}

            {/* <div className='descbot'>
                <h1>We provide complete trust and full healing for you to improve your health</h1>
                <br></br>
                <p>Hello, you are greeted by the Operational Manager, Weninger Pezo, and the Strategic Plans Manager, Karin Pezo, from the incredible team of Amazon Natural Healing. We hope that you can give us the opportunity to assist you in your healing journey, providing you with the necessary comforts and clarifying all your doubts. For this, you can leave us a message in the "Contact Us" section or contact us at the following numbers:</p>
                <br></br>
                <p><i class="fa fa-phone"></i> +51 931 552 874 Weninger/Peru</p>
                <p><i class="fa fa-phone"></i> +1 505 720 4704 Weninger/U.S.</p>
                <p><i class="fa fa-phone"></i> +1 240 687 7121 Karin/U.S.</p>
                <br></br>
                          
            </div>

            <div className='quote'>
                <i className='fa fa-quote-left'></i>
                <p>We are committed to offering our guests the chance to access the ancient healing wisdom of the Shipibo people, while also assisting this distinctive culture in safeguarding its knowledge and heritage in the 21st century.</p>
            </div> */}
            <Face/>
            {/* <Comments/> */}
            </section>

            <section className='sideContent'>
            <Heading title='Stay Connected'></Heading>
            <SocialMedia/>
            <SideDiet/>
            <Fpost/>
            </section>
        </div>
        </main>
    </>
  )
}

export default AyahuascaData