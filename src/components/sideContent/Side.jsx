import React from 'react'
import SocialMedia from './SocialMedia'
import Heading from '../heading/Heading'
import Fpost from '../fpost/Fpost'
import Gallery from '../gallery/Gallery'

const Side = () => {
  return (
    <>
        <Heading title='Stay Connected'></Heading>
        <SocialMedia/>
        <Fpost/>
        <Gallery/>
    </>
  )
}

export default Side