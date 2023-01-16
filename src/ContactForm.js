import React from 'react'

function ContactForm() {

	return (
		<div className='contactcardholder'>

			<div className='contactcard'>

				<form action="https://gmail.us21.list-manage.com/subscribe/post?u=ac1c083751d9fe609a58f1cfd&amp;id=9bda47a092&amp;f_id=000bcde1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self">
					<input name="MMERGE3" class="" id="mce-MMERGE3" type="text" placeholder="Name" require />
					<input name="EMAIL" type="email" id="mce-EMAIL" placeholder="Email" require />
					<input name="FSUBJECT" type="" id="mce-FSUBJECT" placeholder="Subject" />
					<input name="PHONE" type="number" id="mce-PHONE" placeholder="Phone Number" />
					<textarea name="MMERGE2" id="mce-MMERGE2" cols="20" rows="8" placeholder="Message..."></textarea>
					<div class="optionalParent">
						<div class="clear foot">
							<input type="submit" value="Send" name="subscribe" id="mc-embedded-subscribe" class="button" />
								<p class="brandingLogo collapse"><a href="http://eepurl.com/ih8RSr" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" alt="" /></a></p>
						</div>
					</div>
				</form>

			</div >

		</div >
	)
}

export default ContactForm