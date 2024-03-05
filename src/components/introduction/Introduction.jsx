import React from 'react'
import "./Introduction.scss"
import { FaWhatsapp, FaInstagram, FaArrowRight } from 'react-icons/fa'

function Introduction() {
	return (
		<div className='introduction'>
			<div className="introduction__img">
				{/* <h1>Cleaning Solutions</h1> */}
			</div>
			<div className="introduction__link-cont">
				<h3>GET A FREE Cost Estimate. <span>(leave you name, e-mail, phone to reach you back)</span></h3>
				{/* <h6>(leave you name, e-mail, phone to reach you back)</h6> */}
				<a className='contact__media--links' href='mailto:rthyssen73@gmail.com' >Contact now <FaArrowRight /></a>
			</div>
		</div>
	)
}

export default Introduction