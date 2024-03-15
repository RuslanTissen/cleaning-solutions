import React from 'react'
import "./Contact.scss"

function Contact() {
	return (
		<div className='contact' id='contact'>
			<div className="contact__container">
				<div className="contact__title-box">
					<h5>CONTACT US</h5>
					<h2>For any inquiries or questions contact us:</h2>
				</div>

				<div className="contact__link-box">
					<div className="contact--address cont__link--dtls"  >
						<h5>ADDRESS</h5>
						<a href='https://maps.app.goo.gl/9ecfYs5V2nTr4mSY6'>
							<h6>117 The Heights Bvd,  </h6>
							<h6>Pimpama QLD 4209,</h6>
							<h6>Australia</h6>
						</a>
					</div>

					<div className="contact--office cont__link--dtls">
						<h5>OFFICE HOURS</h5>
						<h6>Monday - Friday:</h6>
						<h6>7AM - 5PM</h6>
					</div>

					<div className="contact--email cont__link--dtls">
						<h5>EMAIL</h5>
						<h6><a href='mailto:rthyssen73@gmail.com' target="_blank" >LONGO@clining.tech</a></h6>
					</div>

					<div className="contact--phone cont__link--dtls">
						<h5>PHONE</h5>
						<h6>+61 452 681 694</h6>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Contact