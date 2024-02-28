import React, { useContext } from 'react'
import "./About"
import "./About.scss"
import { BsFillBoxFill } from 'react-icons/bs'
import AboutPicture from './aboutPicture/AboutPicture'
import AboutText from './aboutText/AboutText'
import AboutVision from './aboutVision/AboutVision'
import LetsContact from '../services/letsContact/LetsContact'
import AboutWorking from './aboutWorking/AboutWorking'
import trans from '../../Translate'
import { Context } from '../../Context'

function About() {
const {lang} = useContext(Context)

	return (
		<div className='about' >

			<AboutPicture />

			<AboutText />

			<AboutVision />

			<LetsContact
				contactTitle={`${trans[lang].aboutEmpowering}`}
				contactButton={`${trans[lang].aboutLetsMeet}`}
			/>

			<AboutWorking />

		</div>
	)
}

export default About


