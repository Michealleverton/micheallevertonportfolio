import React from 'react'
import heroimage from "./assets/screenshots.png"
import "./typing_effect.css"

function Hero() {

    return (
        <section className='heroheightauto' id='Hero'>

            <div className="bluecircleblur">...</div>

            <div className="name_container">
                <div className="name_styling textwhite">
                    Micheal Leverton
                </div>
                <div className="link_container">
                    <a href="#projects" className="cleanlinks textwhite">Project</a>
                    <a href="#knowledge" className="cleanlinks textwhite">Knowledge</a>
                    <a href="#about" className="cleanlinks textwhite">About</a>
                    <a href="#about" className="cleanlinks textwhite">Hire</a>
                </div>
            </div>

            <div className="hero_content_container">
                <div className="hero_info_container">
                    <div>
                        <h6 data-aos="fade-up"
                            data-aos-offset="150"
                            data-aos-delay="5"
                            data-aos-duration="700"
                            data-aos-easing="ease-in-out"
                            className="hero_title textwhite">
                            Full-Stack<br />Ethereum Solidity<br />Developer
                        </h6>
                    </div>

                    <div>
                        <p className="paragraph_text_size textwhite" data-aos="fade-up"
                            data-aos-offset="150"
                            data-aos-delay="5"
                            data-aos-duration="700"
                            data-aos-easing="ease-in-out">
                            Let me help you with the frontend and backend of your projects.  I can start by helping with the page design in Photoshop, Dreamweaver, Figma or Webflow. Then I can help with the solidity smart contract development. Finishing off by helping in the creation of the frontend and connecting to the smart contract and displaying it on the frontend.
                        </p>
                    </div>
                    <div data-aos="fade-up"
                            data-aos-offset="150"
                            data-aos-delay="5"
                            data-aos-duration="700"
                            data-aos-easing="ease-in-out" class="wrapper">
                        <div class="static-txt">I Make</div>

                        <ul class="dynamic-txts">
                            <li><span>FrontEnds</span></li>
                            <li><span>Middleware</span></li>
                            <li><span>BackEnds</span></li>
                        </ul>
                    </div>
                </div>

                <div className="hero_img_container">
                    <img data-aos="fade-in" data-aos-offset="150"
                        data-aos-delay="500"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out" alt="" className="logo" src={heroimage} />
                </div>
            </div>

        </section>
    )
}

export default Hero