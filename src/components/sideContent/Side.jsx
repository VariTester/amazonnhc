import React from 'react'
import SocialMedia from './SocialMedia'
import Heading from '../heading/Heading'
import Fpost from '../fpost/Fpost'
import Gallery from '../gallery/Gallery'
import SideDiet from './SideDiet'

const Side = () => {
  return (
    <>
        <Heading title='Stay Connected'></Heading>
        <SocialMedia/>
        <SideDiet/>
        <Fpost/>
        <Gallery/>
    </>
  )
}

export default Side