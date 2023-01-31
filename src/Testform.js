import { React, useState } from 'react'

function Testform() {

    const [formState, setFormState] = useState({})

    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const subject = document.getElementById('subject')
    const phone = document.getElementById('phone')
    const message = document.getElementById('message')

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    console.log(formState)

    const submitHandler = () => {
        const config = {
            SecureToken: "1d82c763-47c8-41d0-88a0-8eec88af8e56",
            To: 'micheallevertonportfolio@gmail.com',
            From: email,
            Subject: subject,
            Body: name, phone, message,
        }
        if(window.Email) {
            window.Email.send(config)
        }
    }

    return (
        <div className='contactcardholder'>
            <div className='contactcard'>

                <form onSubmit={submitHandler} className="form_contact">

                    <div className="requireindicator"><span className="asterisk">*</span> indicates required</div>
                    <div className="">
                        <label>Your Name </label>
                        <input onChange={changeHandler} type="text" name="Name" className="" id="name" />
                    </div>
                    <div className="">
                        <label>Email Address  <span className="asterisk">*</span></label>
                        <input onChange={changeHandler} type="email" name="EMAIL" className="" id="email" required />
                    </div>
                    <div className="">
                        <label>Subject </label>
                        <input onChange={changeHandler} type="text" name="SUBJECT" className="" id="subject" />
                    </div>
                    <div className="">
                        <label>Phone Number </label>
                        <input onChange={changeHandler} type="text" name="PHONE" className="" id="phone" />
                    </div>
                    <div className="">
                        <label>Message  <span className="asterisk">*</span></label>
                        <textarea onChange={changeHandler} name="Message" id="message" cols="30" rows="2"></textarea>
                        {/* <input type="text" name="Message" className="" id="message" required /> */}
                    </div>

                    <div className="form_submit_btn">
                        <input type="submit" name="Submit" id="submit" className="" />
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Testform