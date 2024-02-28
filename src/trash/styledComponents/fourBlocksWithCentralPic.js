import styled from "styled-components";

const FourBlocksWithPic = styled.div`
background-color: black;
section{
	max-width: 1500px;
	margin: clamp(1rem, 5vw, 2rem) auto;
	padding: clamp(1rem, 2vw, 3rem) clamp(1rem, 10vw, 7rem);
	background-image: url("../../../../images/techPicture2Background.png");
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	display: flex;
	flex-wrap: wrap;
	gap: clamp(1rem, 5vw, 2rem);
	div{
		flex: 1 1 48%;
		display: flex;
		flex-wrap: wrap;
		div{
			flex: 1 1 100%;
			height: fit-content;
			img {
				width: clamp(5rem, 10vw, 8rem);
				margin: clamp(.5rem, 2vw, 3rem) auto;
				display: block;
			}
		}
		p {
			height: 50%;
			font-family: "Tomorrow", sans-serif;
			font-size: clamp(0.8rem, 2vw, 1rem);
			color: white;
			text-align: center;
			padding: 0 clamp(1rem, 5vw, 3rem);
		}
	}
}

`
export {FourBlocksWithPic}
