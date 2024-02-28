import React from 'react'
import "./Inside.scss"
import { TiTick } from "react-icons/ti"
import { HiOutlineArrowRight } from "react-icons/hi"


function Inside() {
	return (
		<div className='inside' >

			<h2 id='inside'>Behind the Tissen scene.</h2>

			<div className="inside__container__1">
				<div className="inside__container__1__box-one">
				</div>

				<div className="inside__container__1__box-twoo">
					<h5>Lorem ipsum.</h5>
					<h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor mollitia suscipit velit odio ipsam ipsum!</h3>
					<p className='strtagy'>Strategic planning <HiOutlineArrowRight /></p>
				</div>

			</div>{/*  */}

			<div className="inside__container__2">
				{/* <div className="inside__container__box">	</div> */}

				<div className="inside__container__2__box">
					<h3>Lorem ipsum.</h3>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor mollitia suscipit velit odio ipsam ipsum!</p>
					<HiOutlineArrowRight />
				</div>

				<div className="inside__container__2__box">
					<h3>Lorem ipsum.</h3>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor mollitia suscipit velit odio ipsam ipsum!</p>
					<HiOutlineArrowRight />
				</div>

				<div className="inside__container__2__box">
					<h3>Lorem ipsum.</h3>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor mollitia suscipit velit odio ipsam ipsum!</p>
					<HiOutlineArrowRight />
				</div>

				{/* <div className="inside__container__2__box">
					<h3>Lorem ipsum.</h3>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor mollitia suscipit velit odio ipsam ipsum!</p>
					<HiOutlineArrowRight/> */}

				{/* <h6>Lorem, ipsum dolor.</h6>
					<p><TiTick /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
					<p><TiTick /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
					<p><TiTick /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> */}
				{/* </div> */}

			</div>

		</div>
	)
}

export default Inside