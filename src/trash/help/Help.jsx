import React from 'react'
import "./Help.scss"
import image1 from "../../../images/help2.jpg"
import image2 from "../../../images/help3.jpg"
import image3 from "../../../images/help4.jpg"
import image4 from "../../../images/help5.jpg"
import image5 from "../../../images/help6.jpg"
import { HiOutlineArrowRight } from "react-icons/hi"


function Help() {
	return (
		<div className='help'>
			<div className="help__image__container">
				{/* <p>Assistance</p> */}
			</div>

			<div className="help__explanation__container">
				<h2>How Tissen Assists</h2>
				<h3>Search what kind of assist do you need.</h3>
			</div>

			<div className="help__sort__container">
				<div className="help__sort__container__box">
					<div className="help__sort__image__container"><img src={image1} alt='Ups, image is lost' /></div>
					<div className="help__sort__text__container">
						<h3>You have a limited budget.</h3>
						<h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, ratione inventore maxime molestiae a modi!</h4>
						<div><HiOutlineArrowRight /></div>
					</div>
				</div>

				<div className="help__sort__container__box">
					<div className="help__sort__image__container"><img src={image2} alt='Ups, image is lost' /></div>
					<div className="help__sort__text__container">
						<h3>You project needs to be expedited.</h3>
						<h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, ratione inventore maxime molestiae a modi!</h4>
						<div><HiOutlineArrowRight /></div>
					</div>
				</div>

				<div className="help__sort__container__box">
					<div className="help__sort__image__container"><img src={image3} alt='Ups, image is lost' /></div>
					<div className="help__sort__text__container">
						<h3>Project requirements needs special specialist.</h3>
						<h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, ratione inventore maxime molestiae a modi!</h4>
						<div><HiOutlineArrowRight /></div>
					</div>
				</div>

				<div className="help__sort__container__box">
					<div className="help__sort__image__container"><img src={image4} alt='Ups, image is lost' /></div>
					<div className="help__sort__text__container">
						<h3>You need enhance your team for certain project.</h3>
						<h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, ratione inventore maxime molestiae a modi!</h4>
						<div><HiOutlineArrowRight /></div>
					</div>
				</div>

				<div className="help__sort__container__box">
					<div className="help__sort__image__container"><img src={image5} alt='Ups, image is lost' /></div>
					<div className="help__sort__text__container">
						<h3>You have an idea and you need a strategy.</h3>
						<h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, ratione inventore maxime molestiae a modi!</h4>
						<div><HiOutlineArrowRight /></div>
					</div>
				</div>
			</div>

			<div className="help__contact__container">

			</div>

			<div className="help__advice__container">

			</div>

		</div>
	)
}

export default Help