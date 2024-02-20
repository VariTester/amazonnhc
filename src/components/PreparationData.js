import React from 'react'
import Heading from './heading/Heading'
import SocialMedia from './sideContent/SocialMedia'
import SideDiet from './sideContent/SideDiet'
import Fpost from './fpost/Fpost'
import Face from './facebook/Face'
import Comments from './comments/Comments'
import Gallery from './gallery/Gallery'

const PreparationData = () => {
  return (
    <>
        <main>
        <div className='container'>
        <section className='mainContent details'>
            <h1 className='title'>Ayahuasca diet</h1>

            <div className='author'>
                <p>The pre-Ayahuasca diet is somewhat unique to the Peruvian Amazon</p>
            </div>

            <div className='desctop'>
                <p>Ayahuasca, a sacred plant medicine revered for its profound healing properties, is deeply intertwined with the cultural fabric of the Peruvian Amazon. Central to the Ayahuasca experience is the pre-Ayahuasca diet, a ritualistic practice designed to prepare both body and mind for the transformative journey ahead.</p>
                <p>This diet, rooted in ancient wisdom, follows the Five “S’s” principle: Minimize salt, sugar, spices, spirits, and sex. By adhering to these guidelines, participants cleanse their bodies of impurities, allowing the potent brew of Ayahuasca to work its magic unimpeded.</p>
                <p>Minimizing salt and sugar reduces unnecessary stimulation, while abstaining from spices and spirits ensures clarity of consciousness during the ceremony. Additionally, refraining from sexual activity helps to conserve vital energy, directing it towards the healing process.</p>
                <p>Our experienced shamans recommend initiating this diet at least three days prior to your Ayahuasca experience, allowing ample time for the body to detoxify and prepare. Following the guided journey, it is advised to continue the diet for at least one week, allowing the healing energies of Ayahuasca to integrate fully into your being.</p>
                <p>Embracing the Ayahuasca diet is not merely a physical practice, but a sacred ritual that honors the ancient traditions and wisdom of the Amazonian people. It serves as a pathway to self-awareness, healing, and spiritual growth, guiding participants on a profound journey of inner exploration and transformation.</p>
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
            <Comments/>
            </section>

            <section className='sideContent'>
            <Heading title='Stay Connected'></Heading>
            <SocialMedia/>
            <SideDiet/>
            <Fpost/>
            <Gallery/>
            </section>
        </div>
        </main>
    </>
  )
}

export default PreparationData