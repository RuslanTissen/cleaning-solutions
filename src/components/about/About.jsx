import React from 'react'
import "./About.scss"
import { FaArrowRight } from 'react-icons/fa'

function About() {
	return (
		<div className='about' id='about'>

			<div className="about__image">
				<div className="about__image--self"></div>
			</div>

			<div className="about__text-box">
				<h5>ABOUT OUR COMPANY</h5>
				<h2>Providing expert cleaning solutions for a spotless environment.</h2>
				<p>Are you a new homeowner or office tenant? Discovering your space needs a refresh? Look no further! Our professional exterior cleaning company offers a complete range of house washing methods. Our trained, reliable employees will rejuvenate your property, giving it a fresh new look.</p>
				<a href='mailto:rthyssen73@gmail.com'  target="_blank">get a contact <FaArrowRight /></a>
			</div>

		</div>
	)
}

export default About