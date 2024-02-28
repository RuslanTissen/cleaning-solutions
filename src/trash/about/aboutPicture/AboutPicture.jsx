import React, { useContext } from 'react'
import "./AboutPicture.scss"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function AboutPicture() {
	const { lang } = useContext(Context)

	return (
		<div className='aboutPicture'>
			<div className="aboutPicture__container">
				<h2 className='title__super__include'>{trans[lang].aboutTitle}</h2>
			</div>
		</div>
	)
}

export default AboutPicture