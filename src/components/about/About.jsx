import React from 'react'
import "./About.scss"
import { FaArrowRight } from 'react-icons/fa'
import office from "../../images/office_cleaning.jpg"

function About() {
	return (
		<div className='about' id='about'>

			<div className="about__image">
				{/* <div className="about__image--self"></div> */}
				<img src={office} alt="Ups, here should office cleaning photo" loading='lazy'/>
			</div>

			<div className="about__text-box">
				<h5>office cleaning</h5>
				<h2>Providing expert cleaning solutions for a spotless environment.</h2>
				<p>Transform your workplace into a pristine sanctuary with our professional office cleaning services. Elevate productivity and uplift morale with a spotless environment. Benefit from our flexible scheduling and competitive pricing, tailored to meet your specific business requirements. Impress clients and motivate employees with an impeccably clean office space. Schedule your cleaning appointment now!</p>
				{/* <p>Are you a new homeowner or office tenant? Discovering your space needs a refresh? Look no further! Our professional exterior cleaning company offers a complete range of house washing methods. Our trained, reliable employees will rejuvenate your property, giving it a fresh new look.</p> */}
				<a href='mailto:rthyssen73@gmail.com' target="_blank">get a contact <FaArrowRight /></a>
			</div>

		</div>
	)
}

export default About