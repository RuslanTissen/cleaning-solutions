import React, { Component } from 'react'
import "./Work.scss"
import { FaArrowRight } from 'react-icons/fa'
import work1 from "../../images/work1.jpg"
import work2 from "../../images/work2.jpg"
import work3 from "../../images/work3.jpg"
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Work() {
	return (
		<div className='work'>

			<div className="work__text-box">
				<h5>houskeeping services</h5>
				<h2>We assist our clients.</h2>
				<p>Experience the convenience and comfort of our housekeeping services. Our dedicated team ensures your home remains immaculate, allowing you to focus on what matters most. From thorough cleaning to meticulous organization, we tailor our services to meet your unique needs. Trust us to maintain a welcoming and orderly space that you can be proud to call home.</p>
				<a href='mailto:rthyssen73@gmail.com' target="_blank">get a contact <FaArrowRight /></a>
			</div>

			<div className="work__galery-box">
				<Carousel>
					<div>
						<img src={work1} loading='lazy' />
					</div>
					<div>
						<img src={work2} loading='lazy' />
					</div>
					<div>
						<img src={work3} loading='lazy' />
					</div>
				</Carousel>
			</div>

		</div>
	)
}

export default Work