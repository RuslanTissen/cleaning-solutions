import styled from "styled-components";

const One_TwoBlocksVideoContainer = styled.div`
	background-color: white;
	div {
		max-width: 1500px;
		height: fit-content;
		margin: 0 auto;
		padding: clamp(1rem, 5vw, 5rem);
		display: flex;
		flex-wrap: wrap;
		gap: clamp(.5rem, 1vw, 2rem);
		h3 {
			flex: 1 1 100%;
			font-family: "Tomorrow", sans-serif;
			font-size: clamp(1rem, 4vw, 2rem);
			font-weight: 400;
			text-align: center;
			padding: clamp(.5rem, 2vw, 3rem) clamp(1rem, 5vw, 5rem);
			margin-bottom: clamp(.1rem, 1vw, 1rem);
		}
		div {
			flex: 1 1 65%;
			// padding: 7%;
		}
		a {
			width: fit-content;
			margin: auto;
			text-transform: uppercase;
			font-family: "Tomorrow", sans-serif;
			padding: clamp(.3rem, 1vw, .8rem) clamp(1.8rem, 5vw, 4rem);
			font-size: clamp(.7rem, 1vw, 1.2rem);
			font-weight: 600;
			letter-spacing: 1px;
			text-decoration: none;
			border: clamp(.5px, .5vw, 4px) solid black;
			color: blue;
			transition: all 0.3s ease-in-out;
		}
		a:hover {
			background-color: black;
			color: white;
		}
	}
}
`
export {One_TwoBlocksVideoContainer}