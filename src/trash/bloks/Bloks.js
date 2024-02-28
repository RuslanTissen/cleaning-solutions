import React from 'react'
import "./Bloks.scss"
import { HiOutlineArrowRight } from "react-icons/hi"

function Bloks() {
	return (
		<div className='bloks'>

			<div className='blok__1 block--container'>
				<h4>Get in touch</h4>
				<p>First meeting, first discus of requirements. </p>
				<div><HiOutlineArrowRight /></div>
			</div>
			<div className='blok__2 block--container'>
				<h4>Business requirements</h4>
				<p>Analysis of business goal.</p>
				<div><HiOutlineArrowRight /></div>
			</div>
			<div className='blok__3 block--container'>
				<h4>Technical requirements</h4>
				<p>Deep analysis of technical requirements.</p>
				<div><HiOutlineArrowRight /></div>
			</div>
			<div className='blok__4 block--container'>
				<h4>Product Launch</h4>
				<p>Test and launch.</p>
				<div><HiOutlineArrowRight /></div>
			</div>

		</div>
	)
}

export default Bloks