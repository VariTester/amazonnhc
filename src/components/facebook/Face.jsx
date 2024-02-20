import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from '../heading/Heading'
import { gallery } from '../../Data'
import './Face.css'
const Face = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
};
return (
<>
    <section className='gallery1'>
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

export default Face