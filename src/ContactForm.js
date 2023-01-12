import React from 'react'
import "./styles.css"

function ContactForm() {
	return (
		<div className='contactcardholder'>

			<div className='contactcard'>

				<form action="https://gmail.us21.list-manage.com/subscribe/post?u=ac1c083751d9fe609a58f1cfd&amp;id=9bda47a092&amp;f_id=000bcde1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
					<div>
						<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
						</label>
						<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required />
					</div>
					<div>
						<label for="mce-FSUBJECT">Subject </label>
						<input type="text" value="" name="FSUBJECT" class="" id="mce-FSUBJECT" />
					</div>
					<div>
						<label for="mce-MMERGE6">Starting Salary Offered </label>
						<input type="number" name="MMERGE6" class="" value="" id="mce-MMERGE6" />
					</div>
					<div>
						<label for="mce-PHONE">Phone Number </label>
						<input type="text" name="PHONE" class="" value="" id="mce-PHONE" />
					</div>
					<div>
						<label for="mce-MMERGE2">Message  <span class="asterisk">*</span></label>
						<input type="text" value="" name="MMERGE2" class="required" id="mce-MMERGE2" required />
					</div>

					<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
				</form>

			</div >

		</div >
	)
}

export default ContactForm