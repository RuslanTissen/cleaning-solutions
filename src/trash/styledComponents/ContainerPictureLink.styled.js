import styled from "styled-components";

const ContainerPictureLink = styled.div`
	max-width: 1500px;
	height: clamp(250px, 40vw, 700px);
	padding: clamp(.5rem, 5vw, 5rem);
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	// height: 300px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	align-items: center;

	h3 {
		max-width: 1250px;
		color: white;
		font-weight: 400;
		font-size: clamp(1.8rem, 3.5vw, 3.5rem);
		text-align: center;
		font-family: "Gruppo", sans-serif;
	}
	a {
		--color: hsl(208, 72%, 39%);
		text-transform: uppercase;
		font-family: "Tomorrow", sans-serif;
		padding: clamp(.3rem, 2vw, .7rem) clamp(1.8rem, 5vw, 5rem);
		font-weight: 500;
		font-size: clamp(0.8rem, 1.5vw, 1.5rem);
		text-decoration: none;
		border: 3px solid var(--color);
		color: white;
		border-radius: 0.25em;

		position: relative;
		isolation: isolate;
	}
	a::after{
		content: "";
		position: absolute;
		z-index: -1;
		background: var(--color);
		inset: 0;

		scale: 0 1;
		transform-origin: right;
		transition: scale 450ms;
	}
	a:hover::after,
	a:focus-visible::after{
		transform-origin: left;
		scale: 1 1;
	}
	// a {
	// 	width: fit-content;
	// 	text-transform: uppercase;
	// 	font-family: "Tomorrow", sans-serif;
	// 	padding: clamp(.3rem, 2vw, .7rem) clamp(1.8rem, 5vw, 5rem);
	// 	font-weight: 500;
	// 	text-decoration: none;
	// 	background-color: #0a62d0;
	// 	color: white;
	// 	transition: all 0.3s ease-in-out;
	// }
	// a:hover {
	// 	background-color: #4a87d0;
	// }

	// @media (min-width: 600px) {
	// 	height: 350px;
	// }
	// @media (min-width: 700px) {
	// 	height: 400px;
	// }
	// @media (min-width: 800px) {
	// 	height: 450px;
	// 	padding: 2.5rem;
	// }
	// @media (min-width: 900px) {
	// 	height: 500px;
	// 	padding: 5rem;
	// }
	// @media (min-width: 1000px) {
	// 	height: 550px;
	// }
	// @media (min-width: 1100px) {
	// 	height: 600px;
	// 	padding: 4rem 1rem 5rem;
	// }
`

export { ContainerPictureLink }