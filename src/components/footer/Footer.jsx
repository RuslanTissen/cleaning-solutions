import React, { useContext } from 'react'
import { Context } from '../Context'
import "./Footer.scss"
// import { NavLink } from 'react-router-dom'
// import logo from "../../images/logo.png"
// import trans from '../Translate.js';

function Footer() {
	const { lang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='footer'>
			<h5>Copyright © 2018 - 2024 | Cleaning solutions. All Rights Reserved.</h5>
			<h5>Web Design by <a href='https://tissen.tech/' target="_blank">Tissen Studio </a> | Privacy Policy | Disclaimer | </h5>
		</div>
	)
}

export default Footer