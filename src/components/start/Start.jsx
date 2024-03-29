import React from 'react'
import "./Start.scss"
import Introduction from '../introduction/Introduction.jsx'
import About from '../about/About.jsx'
import Work from '../work/Work.jsx'
import Services from '../sevices/Services.jsx'
import Contact from '../contact/Contact.jsx'
// import Map from '../map/Map.jsx'

function Start() {
	return (
		<div className='starts'>

			<Introduction />

			<About />

			<Work />

			<Services />

			<Contact />

			{/* <Map /> */}

		</div>
	)
}

export default Start


