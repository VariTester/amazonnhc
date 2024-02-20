import React from 'react'
import './Side.css'

const SocialMedia = () => {
  return (
    <>
      <section className='social'>
        <div className='socBox'>
          <a href='https://www.facebook.com/profile.php?id=61556666640051&mibextid=LQQJ4d'>
          <i className='fab fa-facebook-f'></i>
          <span>12,740 Likes</span>
          </a>

        </div>
        {/* <div className='socBox'>
          <i className='fab fa-pinterest'></i>
          <span>5,600 Fans</span>
        </div> */}
        <div className='socBox'>
          <i className='fab fa-twitter'></i>
          <span>8,700 Followers</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-instagram'></i>
          <span>22,700 Followers</span>
        </div>
        <div className='socBox'>
          <a href='https://youtube.com/@AmazonNaturalHealingCenter?si=0VPNcChM04YDAlpc'>
            <i className='fab fa-youtube'></i>
            <span>2,700 Subscriber</span>
          </a>
        </div>
      </section>
    </>
  )
}

export default SocialMedia