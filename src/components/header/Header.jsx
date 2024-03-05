import React, { useState, useContext, useEffect, useRef } from 'react'
import "./Header.scss"
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
// import { Context } from '../Context.js';
import { NavLink } from 'react-router-dom';
// import logo from "../../images/cleaning-logo-tranc.png"


function Header() {
	const [show, setShow] = useState(false)
	const [active, setActive] = useState(true)
	// const { lang, setLang } = useContext(Context)
	// const [showLanguages, setShowLanguages] = useState(false)
	// const [activeLanguages, setActiveLanguages] = useState(true)

	function myFunction() {
		setActive(!active)
		setShow(!show)
	}

	let menuRef = useRef()
	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setShow(false)
				setActive(true)
			}
		}
		document.addEventListener("mousedown", handler)
	})

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}


	return (
		<div className='header' id='header'>
			<ul className="header__logo--container" ref={menuRef}>
				<li className='logo-box'><NavLink to="*" onClick={scrollToTheTop}><span>LONGO </span>  Cleaning</NavLink> </li>
				<li className='hamburger-box' onClick={() => myFunction()} >
					{active ? <RxHamburgerMenu /> : < RxCross1 />}
				</li>

				{show && <ul className="humburger-menu__container" onClick={() => myFunction()}>
					<li className='humburger-menu__container--link'><NavLink to="Home" onClick={scrollToTheTop}>Home</NavLink> </li>
					<li className='humburger-menu__container--link'><NavLink to="About" onClick={scrollToTheTop}>About</NavLink> </li>
					<li className='humburger-menu__container--link'><NavLink to="Services" onClick={scrollToTheTop}>Services</NavLink> </li>
					<li className='humburger-menu__container--link'><NavLink to='Contact' onClick={scrollToTheTop}>Contact</NavLink></li>
				</ul>}
			</ul>

			<div className='header__big-container' >
				{/* <div className="ul__container"> */}
					<ul className='header__big-container--ul'>
						<li className='logo-box'><NavLink to="*" onClick={scrollToTheTop}><span>LONGO </span>  Cleaning</NavLink> </li>

						{/* <li className='li1'><NavLink to="*" onClick={scrollToTheTop}></NavLink> </li> */}
						<li className='humburger-menu__container--link'><NavLink to="Home" onClick={scrollToTheTop}>Home</NavLink> </li>
						<li className='humburger-menu__container--link'><NavLink to="About" onClick={scrollToTheTop}>About</NavLink> </li>
						<li className='humburger-menu__container--link'><NavLink to="Services" onClick={scrollToTheTop}>Services</NavLink> </li>
						<li className='humburger-menu__container--link'><NavLink to='Contact' onClick={scrollToTheTop}>Contact</NavLink></li>
					</ul>
				</div>
			{/* </div> */}
		</div>
	)
}

export default Header









// function languagesFunction() {
// 	setShowLanguages(!showLanguages)
// 	setActiveLanguages(!activeLanguages)
// }
// let languageRef = useRef()
// useEffect(() => {
// 	let handler = (e) => {
// 		if (!languageRef.current.contains(e.target)) {
// 			setShowLanguages(false)
// 			setActiveLanguages(true)
// 		}
// 	}
// 	document.addEventListener("mousedown", handler)
// })