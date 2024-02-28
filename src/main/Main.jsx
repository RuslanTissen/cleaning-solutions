import React from 'react'
import { Routes, Route } from "react-router-dom"
import Start from '../components/start/Start'
// 

function Main() {
	return (
		<main>
			<Routes>
				<Route path="*" element={<Start />} />
				
				
				
			
			</Routes>

		</main>
	)
}

export default Main




// import About from '../components/Routes/about/About'
// import Contact from '../components/Routes/contact/Contact'
// import Services from '../components/Routes/services/Services'
// import Careers from '../components/Routes/careers/Careers'
// import How from '../components/Routes/how/How'
// import SoftwareDevelopment from '../components/RoutesByServices/SoftwareDevelopment'
// import E_Commerce from '../components/RoutesByServices/E-Commerce'
// import CloudHosting from '../components/RoutesByServices/CloudHosting'
// import WebDevelopment from '../components/RoutesByServices/WebDevelopment'
// import MobileDevelopment from '../components/RoutesByServices/MobileDevelopment'
// import UX_UI from '../components/RoutesByServices/UX_UI'
// import JS from '../components/RoutesByTechnologies/JS.jsx'
// import GCP from '../components/RoutesByTechnologies/Microsoft_Azure'
// import Angular from '../components/RoutesByTechnologies/Angular'
// import Vue from '../components/RoutesByTechnologies/Vue'
// import React_Native from '../components/RoutesByTechnologies/React_Native'
// import AWS from '../components/RoutesByTechnologies/AWS'
// import Figma from '../components/RoutesByTechnologies/Figma'
// import Python from '../components/RoutesByTechnologies/Python'
// import MUI from '../components/RoutesByTechnologies/MUI'
// import Swift from '../components/RoutesByTechnologies/Swift'
// import MySQL from '../components/RoutesByTechnologies/MySQL'
// import CPlusPlus from '../components/RoutesByTechnologies/CPlusPlus'



	
				
				{/* <Route path="Services" element={<Services />} />
				<Route path="How" element={<How />} />
				<Route path="Careers" element={<Careers />} />
				<Route path="About" element={<About />} />
				<Route path="Contact" element={<Contact />} />
				<Route path='SoftwareDevelopment' element={<SoftwareDevelopment />} />
				<Route path='E_Commerce' element={<E_Commerce />} />
				<Route path='CloudHosting' element={<CloudHosting />} />
				<Route path='WebDevelopment' element={<WebDevelopment />} />
				<Route path='MobileDevelopment' element={<MobileDevelopment />} />
				<Route path='UX_UI' element={<UX_UI />} />
				<Route path='JS' element={<JS />} />
				<Route path='Microsoft_Azure' element={<GCP />} />
				<Route path='Angular' element={<Angular />} />
				<Route path='Vue' element={<Vue />} />
				<Route path='React_Native' element={<React_Native />} />
				<Route path='AWS' element={<AWS />} />
				<Route path='AWS' element={<AWS />} />
				<Route path='Figma' element={<Figma />} />
				<Route path='Python' element={<Python />} />
				<Route path='MUI' element={<MUI />} />
				<Route path='Swift' element={<Swift />} />
				<Route path='MySQL' element={<MySQL />} />
				<Route path='CPlusPlus' element={<CPlusPlus />} /> */}