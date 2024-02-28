import React, { useEffect, useRef, useState } from 'react'
import "./Technology.scss"
import { BsChevronRight } from "react-icons/bs"
import { SiJsonwebtokens } from "react-icons/si"
import { CgGhost } from "react-icons/cg"
import { RiMicrosoftLine } from "react-icons/ri"
import { SlSupport } from "react-icons/sl"
import { BsDatabase } from "react-icons/bs"
import { MdManageAccounts } from "react-icons/md"
import { MdDensitySmall } from "react-icons/md"
import { RiTeamFill } from "react-icons/ri"
import { ImMap } from "react-icons/im"
import { GrApps } from "react-icons/gr"
import { CiMenuKebab } from "react-icons/ci"
import { NavLink } from 'react-router-dom'

function Technology() {
	const [active, setActive] = useState(false)

	let menuRef = useRef()

	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setActive(false)
			}
		}
		document.addEventListener("mousedown", handler)
		return () => {
			document.removeEventListener("mousedown", handler)
		}
	})

	function makeActive() {
		setActive(!active)
	}
	const scrollToTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='technology'>

			<div className="technology__nav__container" ref={menuRef}>
				<ul className='technology__nav__container__title' onClick={() => makeActive()}>
					<li>Technology</li>
					<li><CiMenuKebab /></li>
				</ul>
				{active && <ul className='technology__nav__container__list' onClick={() => makeActive()} >
					<li ><a href="#services">Services</a> </li>
					<li><a href="#inside">Inside Tissen</a> </li>
					<li><a href="#">Consulting</a> </li>
				</ul>}
			</div>

			<div className="services__wraper">
				<p id='services'>Explore Our Services</p>

				<div className="services__container" onClick={scrollToTop}>
					<NavLink to="services"><SiJsonwebtokens /> <p>Website development <BsChevronRight /></p> </NavLink>
					<NavLink to="services"><CgGhost /> <p>Website hosting <BsChevronRight /></p>  </NavLink>
					<NavLink to="services"><RiMicrosoftLine /><p>Software Development<BsChevronRight /></p>  </NavLink>
					<NavLink to="services"><SlSupport /><p>Software support <BsChevronRight /> </p> </NavLink>
					<NavLink to="services"><BsDatabase /><p>Database Development<BsChevronRight /> </p> </NavLink>
					<NavLink to="services"><MdManageAccounts /><p>Database Management<BsChevronRight /> </p> </NavLink>
					<NavLink to="services"><MdDensitySmall /><p>IT infrastructure <BsChevronRight /></p>  </NavLink>
					<NavLink to="services"><RiTeamFill /><p>Team planning <BsChevronRight /> </p> </NavLink>
					<NavLink to="services"><ImMap /><p>Autsourcing strategy mapping<BsChevronRight /> </p> </NavLink>
					<NavLink to="services"><GrApps /><p>App production and support <BsChevronRight /> </p> </NavLink>

				</div>
			</div>








		</div>
	)
}

export default Technology







{/* <div className="tech__list">
				<div className="tech__list--block">
					<div className="tech-first"><img src={cSharp} alt="C-Sharp" /><span>.Net/C#</span><div><FiChevronDown /></div></div>
					<div className="tech-second">
					<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
					</div>
				</div>

				<div className="tech__list--block">
					<div className="tech-first"><img src={cSharp} alt="C-Sharp" /><span>.Net/C#</span><div><FiChevronDown /></div></div>
					<div className="tech-second">
					<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
					</div>
				</div>

				<div className="tech__list--block">
					<div className="tech-first"><img src={cSharp} alt="C-Sharp" /><span>.Net/C#</span><div><FiChevronDown /></div></div>
					<div className="tech-second">
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
					</div>
				</div>
			</div> */}



{/* <div className="technology__container-list">
<div className="tech-box" onClick={() => showInfo()}>
	{active ? (
		<div className='tech__title' >
			<div className="tech-image tech__info"><img src={cSharp} alt="C-Sharp" /><span>.Net/C#</span><div><FiChevronDown /></div></div>
		</div>)
		: (
			<div className='tech__title' >
				<div className="tech-section">
					<div className="tech-image tech__info"><img src={cSharp} alt="C-Sharp" /><span></span><div><FiChevronDown /></div></div>
					<div className="tech__info">BLA BLA</div>
					<div className="tech__info">BLA BLA</div>
					<div className="tech__info">BLA BLA</div>
					<div className="tech__info">BLA BLA</div>
					<div className="tech__info">BLA BLA</div>
				</div>
			</div>
		)
	}
</div>
</div> */}