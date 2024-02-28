import React, { useContext } from 'react'
import "./AboutVision.scss"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function AboutVision() {
const {lang} = useContext(Context)

	return (
		<div className="aboutVision">
			<div className="aboutVision__container">
				<div className="aboutVision__container__boxes aboutVision__container__boxes1">
					<div className="aboutVision__container__boxes_img"></div>
					<h2 className='title__picture--include'>{trans[lang].aboutOurVisionTitle}</h2>
				</div>
				<div className="aboutVision__container__boxes aboutVision__container__boxes2">
					<p>{trans[lang].aboutOurVisionText}</p>
					<div className="aboutVision__container__boxes_img"></div>
				</div>
			</div>
		</div>
	)
}

export default AboutVision