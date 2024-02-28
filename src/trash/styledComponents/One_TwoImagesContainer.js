import styled from "styled-components";

const One_TwoImagesContainer = styled.div`
background-color: white;
	div {
		max-width: 1500px;
		height: fit-content;
		margin: 0 auto;
		padding: clamp(1rem, 5vw, 5rem);
		display: flex;
		flex-wrap: wrap;
		gap: clamp(.1rem, 1vw, 2rem);
			h3 {
				flex: 1 1 100%;
				font-family: "Tomorrow", sans-serif;
				font-size: clamp(1rem, 4vw, 2rem);
				font-weight: 400;
				text-align: center;
				padding: clamp(.5rem, 2vw, 3rem) clamp(1rem, 5vw, 5rem);
				margin-bottom: clamp(.1rem, 1vw, 1rem);
			}
			.modelLastBlock__container__chart_box {
				flex: 1 1 54%;
				img{
					width: 100%;
					margin: auto;
				}
			}
			.modelLastBlock__container__logo_box {
				margin: auto;
				svg {
					font-size: clamp(2.5rem, 15vw, 15rem);
					margin: auto;
				}
			}
		}
	}
}
`
export { One_TwoImagesContainer }