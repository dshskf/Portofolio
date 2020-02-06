import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomeContainer = styled.div`
	position: absolute;
	background: ${(props) => (props.invert ? '#00ff76' : 'white')};
	left: 5vw;
	width: 100%;
	height: 100vh;
`;

export const ThemeMode = styled.div`
	position: absolute;
	right: 7%;
	top: 1%;
	padding: 1rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: none;
	border-radius: 100%;
	cursor: pointer;
`;

export const IconLogo = styled(FontAwesomeIcon)`
	font-size: 2.5rem;
	color: ${(props) => (props.invert ? 'white' : '#00ff76')};
	transition: all 0.5s;

	&:hover {
		transform: rotate(180deg);
	}
`;

export const HomeRope = styled.div`
	position: absolute;
	border-left: 10px solid ${(props) => (props.invert ? 'white' : '#00ff76')};
	border-right: 10px solid ${(props) => (props.invert ? 'white' : '#00ff76')};
	left: 27.5%;
	width: 10%;
	height: 23%;
	transform:${(props) => (props.show ? "translateY(0rem)" : "translateY(-100rem)")};	
	transition: all 1.4s ease-out;
`;

export const HomeData = styled.div`
	position: absolute;
	border: 7px solid ${(props) => (props.invert ? 'white' : '#00ff76')};
	background: #222222;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 10rem;
	min-width: 15rem;
	width: 25%;
	height: 20%;
	z-index: 1;
	left: 20%;
	top: 23%;
	transform:${(props) => (props.show ? "translateY(0rem)" : "translateY(-100rem)")};	
	transition: all 1s ease-out;

	&:hover {
		box-shadow:0 0 10px 2px ${(props) => (props.invert ? 'white' : '#00ff76')};
		box-shadow: ${(props) => (props.hover ? "" : 'none')};
	}
	h1 {
		color: #00ff76;
		margin-bottom: 0.2rem;
		font-weight: normal;
	}

	h2 {
		margin: 0;
		font-weight: normal;
		font-size: 1.2rem;
		color: white;
	}
`;

export const HomeAdditional = styled.div`
	position: absolute;
	background: #222222;
	top: 60%;
	width: 100%;
	height: 40%;
	display: grid;
	grid-template-columns: repeat(3, 32%);
`;

export const Image = styled.img`
	position: absolute;
	height: 70%;
	left: 60%;
	top: 15%;	
	filter:${(props) => (props.show ? "blur(0) brightness(100%) opacity(1)" : "blur(20px) brightness(0%) opacity(0)")};	
	transition:all 1s ease-in;
`;

const input_before_after = css`
	content: 'Download';
	position: absolute;
	color: rgb(255, 0, 88);
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	transition: all 0.7s ease-in-out;
	background: #00ff76;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: scale(2) translateY(2rem);
	opacity: 0;
`;

export const DownloadButton = styled.a`
	border: 2px solid #00ff76;
	padding: 0.5rem 1rem;
	background: transparent;
	color: #00ff76;
	margin: 1rem auto;
	position: relative;
	cursor: pointer;

	&:before {
		${input_before_after};
		pointer-events: none;
	}

	&:hover:before {
		opacity: 100;
		transform: scale(1) translateY(0);
	}
`;
