import React from 'react'
import ProfilePic from './assets/profilepic2.png'

function About() {
  return (
    <section className='' id='about'>
    <div className='profilecontainer textwhite mt-5'>
      <div className='profilename'>Micheal Leverton</div>
      <div className='profiledescription'>Developer And Designer</div>
      <div className='profileaboutme'>Not even a year after the first computer came to market  in 1971, I was born. 8 years later I got my first computer and learned basic language. I've been coding ever since. I have seen the progression of the Web from start to Web3.0. The blockchain is in its infancy and I have decided to grow and learn with it. <br/>Let me help you and your team continue to grow and succeed. </div>
      <div className='profilepic'><img alt="" src={ProfilePic} /></div>
    </div>
    </section>
  )
}

export default About