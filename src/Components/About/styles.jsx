import styled from 'styled-components';

export const AboutMeContainer = styled.div`
	width: 95vw;
	height: 100vh;
	position: absolute;
	left: 5vw;
	display: grid;
	grid-template-columns: 55% 45%;

	@media(max-width:760px){
		width:100vw;
		left:0;
	}
`;

export const HighlightLine = styled.span`
	position: absolute;
	width: ${props => props.fill ? "100%" : 0};	
	height: 0.3rem;
	box-shadow: ${props => props.fill ? "0 0 10px 2px #00ff76" : null} ;
	background: #00ff76;
	z-index: 1;
	transition:all 1.5s ease-out;

	&:nth-child(1) {
		top: 5%;
	}

	&:nth-child(2) {
		bottom: 5%;
	}

	@media(max-width:760px){
		display:none;
	}

`;
