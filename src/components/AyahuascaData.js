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
                <p>"Embark on a journey within, where every moment brings you closer to the clarity, healing, and transformation you've been seeking."</p>
            </div> 

            <div className='desctop'>
                <p>We offer a minimum stay of 2 nights, carefully designed for you to enjoy an authentic ayahuasca ceremony in a safe and comfortable environment. From the moment you arrive in Iquitos, we take care of everything : we pick you up from your hotel, bring you to our lodge, and provide you with healthy and delicious meals adapted to the ayahuasca diet.</p>
                <p>The ayahuasca ceremony is held in a traditional maloka, a rustic and protected space, just a short walk from your bungalow. Guided by an indigenous shaman, you will embark on a deep journey of self-discovery and healing, followed by a flower bath to balance your body, mind, and spirit. The next morning, the shaman will help you interpret your visions, offering clarity and understanding.</p>
                <p>We are committed to using the highest quality ayahuasca, harvested and prepared according to indigenous traditions, to ensure a pure and transformative experience. Don’t miss this opportunity! to learn more and secure your place in this unforgettable experience.</p> 
                
            </div>

            {/* <img src={img2} alt=''/>

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