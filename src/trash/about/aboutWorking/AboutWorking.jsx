import React, { useContext } from 'react'
import "./AboutWorking.scss"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function AboutWorking() {
const {lang} = useContext(Context)

  return (
	 <div className='aboutWorking'>
		<div className="aboutWorking__container">
		<h2 className='title__picture--include'>{trans[lang].aboutWorkingTitle}</h2>
				<div className="aboutWorking__container__boxes1 aboutWorking__container__boxes">
					<div className="aboutWorkingbox"></div>
					<p>{trans[lang].aboutWorkingText}</p>
				</div>
				<div className="aboutWorking__container__boxes2 aboutWorking__container__boxes">
					<p>{trans[lang].aboutWorkingText2}</p>
					<div className="aboutWorkingbox"></div>
				</div>
		</div>
	 </div>
  )
}

export default AboutWorking