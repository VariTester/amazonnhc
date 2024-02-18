import React from 'react'
import './AboutUsData.css'
import img1 from '../assets/images/logo.png'
import img2 from '../assets/images/anhc/team.jpg'
import Side from './sideContent/Side'

const AboutUsData = () => {
  return (
    <>
        <main>
        <div className='container'>
        <section className='mainContent details'>
            <h1 className='title'>Google to Boost Android Security In Few Days</h1>

            <div className='author'>
                <span>by</span>
                <img src={img1} alt=''/>
                <p>Amazon Naural Hhealing Center Team</p>
            </div>

            <div className='desctop'>
                <p>The Amazon Natural Healing Center is a traditional integrated healing and wellness center that is centered around natural ayahuasca and shamanic practices guided by indigenous shamans located in the Peruvian Amazon Rainforest about 90 minutes from Iquitos, at mile marker 75, on the way to Nauta. Once there our center is about a 45-75 minute walk from the road to our jungle interior. Be sure to travel light, with your overnight belongings in a backpack.</p>
                <p>Our center has 5 boutique jungle lodges that include shower and flush toilet. Each room features a hand-carved wooden mask by the indigenous Boras with an animal spirit that you can use for your energy during your ayahuasca journey. The animal spirits are the jaguar, anaconda, amazon kingfisher, and butterfly.</p>
                
            </div>

            <img src={img2} alt=''/>

            <div className='descbot'>
                <h1>We provide complete trust and full healing for you to improve your health</h1>
                <br></br>
                <p>We are committed to offering our guests the chance to access the ancient healing wisdom of the Shipibo people, while also assisting this distinctive culture in safeguarding its knowledge and heritage in the 21st century.</p>
                <br></br>            
            </div>

            <div className='quote'>
                <i className='fa fa-quote-left'></i>
                <p>We are committed to offering our guests the chance to access the ancient healing wisdom of the Shipibo people, while also assisting this distinctive culture in safeguarding its knowledge and heritage in the 21st century.</p>
            </div>
            </section>

            <section className='sideContent'>
                <Side/>
            </section>
        </div>
        </main>
    </>
  )
}

export default AboutUsData