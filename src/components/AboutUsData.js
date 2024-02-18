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
                <p>The Amazon Natural Healing Center is a traditional integrated healing and wellness center that is centered around natural ayahuasca and shamanic practices guided by indigenous shamans located in the Peruvian Amazon Rainforest about 90 minutes from Iquitos, at mile marker 75, on the way to Nauta. that offers intensive and spiritual ayahuasca retreats with female and male Shipibo healers.</p>
                <p>We are committed to offering our guests the chance to access the ancient healing wisdom of the Shipibo people, while also assisting this distinctive culture in safeguarding its knowledge and heritage in the 21st century.</p>
            </div>

            <img src={img2} alt=''/>

            <div className='descbot'>
                <h1>HOLAAAAAAA</h1>
                <p>DATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
            </div>

            <div className='quote'>
                <i className='fa fa-quote-left'></i>
                <p>quoteeeeeeeeeeeeee</p>
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