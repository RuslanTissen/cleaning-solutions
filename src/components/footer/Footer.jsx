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
		<h4>Copyright © 2018 - 2024 | Cleaning solutions. All Rights Reserved.</h4>
		<h4>Web Design by Tissen Studio | Privacy Policy | Disclaimer | </h4>
		</div>
	)
}

export default Footer