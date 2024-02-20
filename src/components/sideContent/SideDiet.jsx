import React from 'react'
import Heading from '../heading/Heading'

const SideDiet = () => {
    const catgeory = ["Minimize Salt", "Minimize Sugar", "No Spices", "No Spirits", "No Sex"]
  return (
    <>
    
    <section className='catgorys'>
        <Heading title='The Diet' />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default SideDiet