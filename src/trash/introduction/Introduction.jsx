import React from 'react'
import "./Introduction.scss"
import trans from '../Translate'
import { Context } from '../Context'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';

function Introduction() {
	const { lang, setLang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='introdiuction'>
			<div className="introdiuction__box--1">
				<div className="introdiuction__box--1-title--container">
					<h1>Global IT <br /> Outsourcing</h1>
				</div>
				<div className="introdiuction__box--1-button-container">
					<NavLink to="Contact" onClick={scrollToTheTop}>{trans[lang].estimate}</NavLink>
				</div>
			</div>

			<div className="introdiuction__box--2">
				<ul className="introdiuction__contact-container">
					<li>{trans[lang].save1}<mark>{trans[lang].save2} </mark> {trans[lang].save3}</li>
					<li>{trans[lang].project1} <mark>{trans[lang].project2}</mark> {trans[lang].project3}</li>
					<li>{trans[lang].technologies1} <mark>{trans[lang].technologies2}</mark> </li>
				</ul>
			</div>
		</div>
	)
}

export default Introduction