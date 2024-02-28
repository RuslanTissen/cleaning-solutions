import React, { useContext } from 'react'
import "./AboutText.scss"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function AboutText() {
	const { lang } = useContext(Context)

	return (
		<div className='aboutText'>
			<div className="aboutText__container">
				<h2 className='title__picture--include'>{trans[lang].aboutOurMissionTitle}</h2>
				<div className="aboutText__container__boxes1 aboutText__container__boxes">
					<p>{trans[lang].aboutOurMissionText}</p>
					<div className="aboutImagebox"></div>
				</div>
				<div className="aboutText__container__boxes2 aboutText__container__boxes">
					<div className="aboutImagebox"></div>
					<p> {trans[lang].aboutOurMissionText2}</p>
				</div>
			</div>
		</div>
	)
}

export default AboutText