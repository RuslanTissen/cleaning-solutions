import React, { useState, useContext, useEffect, useRef } from 'react'
import "./Header.scss"
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
// import { NavLink } from 'react-router-dom';
import logo from "../../images/logo-trans.png"


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
				<li className='logo-box'>
					<a href="#header" onClick={scrollToTheTop}>
						<img src={logo} alt="Ups, here should be logo" />
						INITIARE
						{/* <span>CLEANING SERVICES  </span> */}
					</a>
				</li>
				<li className='hamburger-box' onClick={() => myFunction()} >
					{active ? <RxHamburgerMenu /> : < RxCross1 />}
				</li>

				{show && <ul className="humburger-menu__container" onClick={() => myFunction()}>
					<li className='humburger-menu__container--link'><a href="#header" onClick={scrollToTheTop}>Home</a> </li>
					<li className='humburger-menu__container--link'><a href="#about" to="About" onClick={scrollToTheTop}>About</a> </li>
					<li className='humburger-menu__container--link'><a href="#services" onClick={scrollToTheTop}>Services</a> </li>
					<li className='humburger-menu__container--link'><a href="#contact" onClick={scrollToTheTop}>Contact</a></li>
				</ul>}
			</ul>

			<div className='header__big-container' >
				{/* <div className="ul__container"> */}
				<ul className='header__big-container--ul'>
					<li className='logo-box'>
						<a href="#header" onClick={scrollToTheTop}>
							<img src={logo} alt="Ups, here should be logo" />
							INITIARE 
							<span> CLEANING SERVICES  </span>
						</a>
					</li>

					{/* <li className='li1'><NavLink to="*" onClick={scrollToTheTop}></NavLink> </li> */}
					<li className='humburger-menu__container--link'><a href="#header" onClick={scrollToTheTop}>Home</a> </li>
					<li className='humburger-menu__container--link'><a href="#about" to="About" onClick={scrollToTheTop}>About</a> </li>
					<li className='humburger-menu__container--link'><a href="#services" onClick={scrollToTheTop}>Services</a> </li>
					<li className='humburger-menu__container--link'><a href="#contact" onClick={scrollToTheTop}>Contact</a></li>
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