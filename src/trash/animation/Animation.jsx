import React from 'react'
import "./Animation.scss"
import parallax1 from "../../images/parallax1.jpg"
import parallax2 from "../../images/parallax2.png"


function Animation() {
	return (
		<div className='wrapper'>
			<header>
				<img src={parallax1} alt='Ups, image is lost' className='background' />
				<img src={parallax2} alt='Ups, image is lost' className='foreground' />
				<h2 className='title'>Welcome!</h2>
			</header>
		</div>
	)
}


export default Animation