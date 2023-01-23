import React from 'react'
import ProfilePic from './assets/profilepic2.png'
import Imagemask from "./Imagemask"

function About() {
  return (
    <section className='' id='about'>

      <div className='about-outside'>
      <Imagemask />

        <div className='minfoholder'>
          <div className='profilecontainer textwhite mt-5'>
            <div className='profilename'>Micheal Leverton</div>
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

        <div className='formholder'>
          <div className='contactcardholder'>

            <div className='contactcard'>
              <div className='hiremetitle'>
                <p className='fs_2 emailtext' >Fullstackportfolio@gmail.com</p>
              </div>

              {/* <!-- Begin Mailchimp Signup Form --> */}
              <div id="mc_embed_signup">
                <form action="https://gmail.us21.list-manage.com/subscribe/post?u=ac1c083751d9fe609a58f1cfd&amp;id=9bda47a092&amp;f_id=000bcde1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self">
                  <div id="mc_embed_signup_scroll">

                    <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                    <div class="mc-field-group">
                      <label for="mce-MMERGE3">Your Name </label>
                      <input type="text" name="MMERGE3" class="" id="mce-MMERGE3" />
                      <span id="mce-MMERGE3-HELPERTEXT" class="helper_text"></span>
                    </div>
                    <div class="mc-field-group">
                      <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                      </label>
                      <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required />
                      <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                    </div>
                    <div class="mc-field-group">
                      <label for="mce-FSUBJECT">Subject </label>
                      <input type="text" name="FSUBJECT" class="" id="mce-FSUBJECT" />
                      <span id="mce-FSUBJECT-HELPERTEXT" class="helper_text"></span>
                    </div>
                    <div class="mc-field-group size1of2">
                      <label for="mce-PHONE">Phone Number </label>
                      <input type="text" name="PHONE" class="" id="mce-PHONE" />
                      <span id="mce-PHONE-HELPERTEXT" class="helper_text"></span>
                    </div>
                    <div class="mc-field-group">
                      <label for="mce-MMERGE2">Message  <span class="asterisk">*</span>
                      </label>
                      <textarea type="text" name="MMERGE2" col="30" row="30" class="required" id="mce-MMERGE2" required />
                      <span id="mce-MMERGE2-HELPERTEXT" class="helper_text"></span>
                    </div>
                    <div id="mce-responses" class="clear foot">
                      <div class="response" id="mce-error-response"></div>
                      <div class="response" id="mce-success-response"></div>
                    </div>
                    <div className='hider' aria-hidden="true"><input type="text" name="b_ac1c083751d9fe609a58f1cfd_9bda47a092" tabindex="-1" /></div>
                    <div class="optionalParent">
                      <div class="clear foot">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                        {/* <p class="brandingLogo"><a href="http://eepurl.com/ih8RSr" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" /></a></p> */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* <!--End mc_embed_signup--> */}

            </div >

          </div >
        </div>

      </div>

    </section>
  )
}

export default About