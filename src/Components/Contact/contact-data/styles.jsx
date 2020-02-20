import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const circleSize = 17;

const shadow = keyframes`
    0%{
        box-shadow: 0 0 10px 1px #00ff76;
    }
    
    25%{
        box-shadow: 0 0 20px 1px #00ff76;
    }
    
    50%{
        box-shadow: 0 0 30px 1px #00ff76;
    }
    
    75%{
        box-shadow: 0 0 20px 1px #00ff76;
    }
    
    100%{
        box-shadow: 0 0 10px 1px #00ff76;
    }
`;

const rotate = keyframes`
    from{
        transform:rotate(0deg);
    }
    
    to{
        transform:rotate(360deg);
    }
`;

export const MaskDisplay = styled.div`
	grid-column: 2/3;
	background: linear-gradient(rgba(33, 33, 33, 0.75), rgba(33, 33, 33, 0.75)),
		url(${require('../../../Assets/contact.jpg')});	
	background-attachment: fixed;
	background-position: center;
	background-size: cover;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform: ${(props) => (props.isShow ? 'translateY(-35%)' : 'translateY(0)')};	
	z-index: 2;
	transition:${props => props.animation ? null : "all 1s ease-out"};
	animation: ${shadow} 3s both infinite ease-out;	
	animation-duration: ${(props) => (props.moving ? '3s' : '20s')};

	@media(max-width:760px){
		transform :none;
		margin-top:20vh;
		height:40rem !important;		
	}
`;

export const DetailDisplay = styled.div`
	animation: ${shadow} 3s both infinite ease-out;	
	animation-duration: ${(props) => (props.moving ? '3s' : '20s')};
	background: #292929;
	position: absolute;
	width: 30%;
	left: 15%;
	height: 100vh;
	z-index: 1;
	transition:${props => props.animation ? null : "all .5s"};

	@media (max-width:760px){
		left:0;
		height:10rem;
		top:55vh;
		width:100vw;
		animation:none;
	}
`;

export const Header = styled.h1`
	color: white;
	margin: 1rem;
	cursor:default;
	text-shadow: 0 0 10px white;
	border: 3px solid #00ff76;
	border-radius: 50%;
	font-size: 1.7rem;
	height: ${circleSize - 5}rem;
	width: ${circleSize - 5}rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: ${(props) => (props.moving ? 'translateY(0)' : 'translateY(-50rem)')};
	transition: all 1s ease-out;

	@media (max-width:760px) {
		width:9rem;
		height:9rem;
		font-size:1.3rem;
	}
`;

export const OuterCircle = styled.div`
	position: absolute;
	height: ${circleSize}rem;
	width: ${circleSize}rem;
	border: 4px solid #00ff76;
	box-shadow: 0 0 20px #00ff76;
	border-radius: 50%;
	transform: ${(props) => (props.moving ? `scale(1)` : `scale(0)`)};
	transition: all 1.5s;

	@media (max-width:760px) {
		width:12rem;
		height:12rem;
	}
`;
export const MovingCircle = styled.div`
	position: absolute;
	height: ${circleSize - 2.5}rem;
	width: ${circleSize - 2.5}rem;	
	border: 8px dashed white;
	border-radius: 50%;
	animation: ${rotate} 10s linear infinite;
	animation-duration: ${(props) => (props.moving ? '10s' : '2s')};

	@media (max-width:760px) {
		width:10.5rem;
		height:10.5rem;
	}
`;

export const HoverDisplay = styled.div`
	position: absolute;
	bottom: 0;
	display: grid;
	width: 100%;
	height: 35%;
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: repeat(2, 50%);

	@media (max-width:760px) {
		top:0;
		height:100%;
	}
`;

export const SubDisplay = styled.div`
	color: #00ff76;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const MediaLogo = styled(FontAwesomeIcon)`
	margin: 0 0.7rem;
	font-size: 2rem;
	filter: drop-shadow(0 0 5px #00ff76);
`;
export const ExpandLogo = styled(FontAwesomeIcon)`
	position: absolute;
	bottom: 2%;
	font-size: 1.5rem;
	cursor: pointer;
	color: white;	
	transform:${props => props.moving ? 'translateY(0rem)' : 'translateY(50rem)'};
	transition:all 0.5s;

	@media (max-width:760px) {
		display:none;
	}
`;
