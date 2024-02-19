import React from 'react'
import './fpost.css'
import Heading from '../heading/Heading'

// import img1 from '../../assets/images/river.png'
import { fpost } from '../../Data'

const Fpost = () => {
  return (
    <>
 <section className='fpost'>
        <Heading title='Facebook post' />
        {fpost.map((val) => {
          return (
            <div className='box flexSB'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>{val.title.slice(0, 35)}...</h1>
                <span>a year ago</span>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Fpost