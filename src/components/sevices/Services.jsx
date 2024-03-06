import React from 'react'
import "./Services.scss"
import { FaArrowRight } from 'react-icons/fa'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { AiOutlineHome } from "react-icons/ai";

function Services() {
	return (
		<div className='services'>

			<div className="services__text-box">
				<h5>Main Services</h5>
				<h2>We Offer a Range of Services to Meet All Types of Needs</h2>
				<a>get a contact <FaArrowRight /></a>
			</div>

			<div className="services__main-box">
				<div className="services__main-box--commercial">
					<div className="commercial--text">
						<HiOutlineBuildingOffice2 />
						<h5>COMMERCIAL</h5>
						<p>Our commercial cleaning services ensure a pristine workplace environment, boosting productivity and morale. With flexible scheduling options and competitive pricing, we offer tailored solutions to suit your business needs. Book now for a spotless office that impresses clients and employees alike.</p>
					</div>
					<div className="commercial--image"><div className="commercial--image--self"></div></div>
				</div>

				<div className="services__main-box--residential">
				<div className="residential--text">
						<AiOutlineHome />
						<h5>residential</h5>
						<p>Our residential cleaning services guarantee a sparkling clean home, providing you with more time to relax and enjoy your space. With customizable packages and transparent pricing, we offer convenience and affordability. Schedule your appointment today for a pristine living environment that you'll love coming home to.</p>
					</div>
					<div className="residential--image"><div className="residential--image--self"></div></div>
				</div>
			</div>

		</div>
	)
}

export default Services