import React from 'react'
import "./Start.scss"
import Introduction from '../introduction/Introduction.jsx'
import About from '../about/About.jsx'
import Work from '../work/Work.jsx'
import Services from '../sevices/Services.jsx'

function Start() {
	return (
		<div className='starts'>

			<Introduction />

			<About />

			<Work />

			<Services />

		</div>
	)
}

export default Start


