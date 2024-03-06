import React from 'react'
import "./Contact.scss"

function Contact() {
	return (
		<div className='contact'>
			<div className="contact__title-box">
				<h5>CONTACT US</h5>
				<h2>For any inquiries or questions contact us:</h2>
			</div>

			<div className="contact__link-box">
				<div className="contact--address cont__link--dtls">
					<h5>ADDRESS</h5>
					<h6>500 Terry Francine St,</h6>
					<h6>San Francisco, CA 94158</h6>
				</div>

				<div className="contact--office cont__link--dtls">
					<h5>OFFICE HOURS</h5>
					<h6>Monday - Friday:</h6>
					<h6>7AM - 5PM</h6>
				</div>

				<div className="contact--email cont__link--dtls">
					<h5>EMAIL</h5>
					<h6>info@mysite.com</h6>
				</div>

				<div className="contact--phone cont__link--dtls">
					<h5>PHONE</h5>
					<h6>123-456-7890</h6>
				</div>
			</div>

		</div>
	)
}

export default Contact