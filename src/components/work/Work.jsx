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
				<h5>Recent services provided</h5>
				<h2>We assisted our clients.</h2>
				<a>get a contact <FaArrowRight /></a>
			</div>

			<div className="work__galery-box">
			<Carousel>
                <div>
                    <img src={work1} />
                </div>
                <div>
                    <img src={work2}/>
                </div>
                <div>
                    <img src={work3}/>
                </div>
            </Carousel>
			</div>

		</div>
	)
}

export default Work