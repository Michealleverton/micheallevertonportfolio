import React from 'react'
import ProfilePic from './assets/profilepic2.png'
import FormTest from './FormTest'
// import Imagemask from "./Imagemask"

function About() {
  return (
    <section className='' id='about'>

      <div className='about-outside'>
        {/* <Imagemask /> */}

        <div className='minfoholder'>
          <div className='profilecontainer textwhite mt-4'>
            <div className='profilename mt-1'>Micheal Leverton</div>
            <div className='profiledescription'>Developer And Designer</div>
            <div className='profileaboutme'>Not even a year after the first computer came to market  in 1971, I was born. 8 years later I got my first computer and learned basic language and I've been coding ever since. I have seen the progression of the Web from start to Web3.0. The blockchain is in its infancy and I have decided to grow and learn with it. <br />My project will speak for itself.<br />Let me help you and your team continue to grow and succeed. </div>
            <div className='singlecol social-media-icons-white d-flex pt-4'>
              <a href='https://facebook.com'>
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href='https://instagram.com'>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href='https://twitter.com'>
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href='https://tiktok.com'>
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href='https://youtube.com'>
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div><img className='profilepic' alt="" src={ProfilePic} /></div>
          </div>
        </div>

        <FormTest />

      </div>

    </section>
  )
}

export default About