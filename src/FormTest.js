import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const FormTest = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mk1etxl', 'template_wx7febg', form.current, 'Ib1rLZFA-kJf6qt4L')
            .then((result) => {
                window.location.replace('https://thankyous.netlify.app/')
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };

    return (
        <section>
            <div className='contactcardholder'>
                <div className='contactcard'>
                    <form ref={form} onSubmit={sendEmail} className="form_contact">

                        <div className="form_header">Contact Me
                        <div className="requireindicator label_style"><span className="asterisk ">*</span> Required Field</div></div>
                        <div className="">
                            <label className="label_style">Your Name </label>
                            <input type="text" name="Name" className="" id="name" />
                        </div>
                        <div className="">
                            <label className="label_style">Email Address  <span className="asterisk">*</span></label>
                            <input type="email" name="Email" className="" id="email" required />
                        </div>
                        <div className="">
                            <label className="label_style">Subject <span className="asterisk">*</span></label>
                            <input type="text" name="Subject" className="" id="subject" required />
                        </div>
                        <div className="">
                            <label className="label_style">Phone Number </label>
                            <input type="text" name="Phone" className="" id="phone" />
                        </div>
                        <div className="">
                            <label className="label_style">Message  <span className="asterisk">*</span></label>
                            <textarea name="Message" id="message" cols="30" rows="2"></textarea>
                            {/* <input type="text" name="Message" className="" id="message" required /> */}
                        </div>

                        <div className="form_submit_btn">
                            <input type="submit" name="Submit" id="submit" value="Send" className="" />
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default FormTest