import React from 'react'

function ContactForm() {

	return (
		<div className='contactcardholder'>

			<div className='contactcard'>
				<div className='hiremetitle'>
					<p className='textwhite fs_3' >Contact Me!</p>
				</div>

				<form action="https://gmail.us21.list-manage.com/subscribe/post?u=ac1c083751d9fe609a58f1cfd&amp;id=9bda47a092&amp;f_id=000bcde1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self">
					<input name="MMERGE3" class="" id="mce-MMERGE3" type="text" placeholder="Name" require />
					<input name="EMAIL" type="email" id="mce-EMAIL" placeholder="Email" require />
					<input name="FSUBJECT" type="" id="mce-FSUBJECT" placeholder="Subject" />
					<input name="PHONE" type="number" id="mce-PHONE" placeholder="Phone Number" />
					<textarea name="MMERGE2" id="mce-MMERGE2" cols="20" rows="8" placeholder="Message..."></textarea>
					{/* <button className='contactform_button' name="subscribe" id="mc-embedded-subscribe" type='submit'>Send Message</button> */}
					<input type="submit" value="Send Message" name="subscribe" id="mc-embedded-subscribe" class="button"></input>
				</form>

			</div >

		</div >
	)
}

export default ContactForm