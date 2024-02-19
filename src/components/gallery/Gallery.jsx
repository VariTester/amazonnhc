import React from 'react'
import Heading from '../heading/Heading'
import { gallery } from '../../Data'
import './gallery.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <>
        <section className='gallery'>
            <Heading title='Gallery'/>
    <Slider   {...settings}>
        {gallery.map((val) => {
          return (
            <div className='img'>
                <img src={val.cover} alt=''/>
            </div>
          )
        })}
    </Slider>

        </section>
    </>
  )
}

export default Gallery