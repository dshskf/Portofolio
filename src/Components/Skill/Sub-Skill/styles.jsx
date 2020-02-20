import styled, { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ReactComponent as Illustrator } from '../../../Assets/illustrator.svg';
import { ReactComponent as AfterEffect } from '../../../Assets/after-effect.svg';
import { ReactComponent as Photoshop } from '../../../Assets/photoshop-cc.svg';
import { ReactComponent as Premiere } from '../../../Assets/premiere-cc.svg';

const round = keyframes`
    from{
        transform: rotate(0deg);
    }
    
    to{
        transform: rotate(360deg);
    }    
`;

const shadow = keyframes`
    0%{
        box-shadow: 0 0 0px 1px #00ff76;
    }
    
    25%{
        box-shadow: 0 0 10px 2px #00ff76;
    }
    
    50%{
        box-shadow: 0 0 20px 3px #00ff76;
    }
    
    75%{
        box-shadow: 0 0 10px 2px #00ff76;
    }
    
    100%{
        box-shadow: 0 0 0px 1px #00ff76;
    }
`;

const boolTransition = css`
transition:${props => props.animation ? null : "all 1s"};

`

const uiLogo = css`
	height: 1.5rem;
	width: 1.5rem;
`;

export const IllustratorLogo = styled(Illustrator)`
	${uiLogo};
`;

export const PhotoshopLogo = styled(Photoshop)`
	${uiLogo}
`;

export const AfterEffectLogo = styled(AfterEffect)`
	${uiLogo}
`;

export const PremiereLogo = styled(Premiere)`
	${uiLogo}
`;

export const SubSkillContainer = styled.div`
	width: 100%;
	height: 0.5rem;
	background: #00ff76;
	position: relative;
	box-shadow: 0 0 10px #00ff76;

	transform: ${(props) =>
		props.line
			? 'rotate(90deg) translateX(0rem)'
			: 'rotate(90deg) translateX(-100rem)'};
	transform: ${(props) => (props.rotate ? 'rotate(0)' : null)};
	${boolTransition};

	@media (max-width: 760px) {
		width: 100vw;
		background: transparent;
		box-shadow: none;
		transform: none;
	}
`;

export const Skill = styled.div`
	width: 37vw;
	height: 37vw;
	border-radius: 50%;
	border: 1rem solid #00ff76;
	background: #292929;
	position: absolute;
	top: -19.5vw;
	left: 28vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform: ${(props) => (props.show ? 'scale(1)' : 'scale(0)')};	
	animation: ${shadow} 3s linear infinite;
	${boolTransition};

	&:before {
		content: '';
		width: 31vw;
		height: 31vw;
		border-radius: 50%;
		position: absolute;
		border: ${(props) => (props.animate ? '0.4rem solid white' : '')};
		border-top: 0.4rem solid #292929;
		border-bottom: 0.4rem solid #292929;
		animation: ${round} 3s linear infinite;
		transition: ${props => props.animation ? null : "all 1.5s"};

		@media (max-width: 760px) {
			animation: none;
			border: none;
		}
	}

	@media (max-width: 760px) {
		width: 100%;
		border: none;
		box-shadow: none;
		left: 0;
		top: -10vh;
		animation: none;
	}
`;

const arrow = css`
	color: white;
	font-size: 2rem;
	position: absolute;
	cursor: pointer;
	opacity: ${(props) => (props.show ? 1 : 0)};
	transition: ${props => props.animation ? null : "all 0.3s"};

	&:hover {
		transform: scale(1.5);
		text-shadow: 0 0 10px white;
	}
`;

export const LeftArrow = styled.span`
	${arrow};
	left: 1%;

	@media (max-width: 760px) {
		left: 5%;
	}
`;

export const RightArrow = styled.span`
	${arrow};
	right: 1%;

	@media (max-width: 760px) {
		right: 5%;
	}
`;

export const SkillTitle = styled.div`
	text-align: center;
	position: relative;
	transform: ${(props) => (props.next ? 'scale(0)' : null)};
	filter: ${(props) => {
		return props.show ? (props.next ? 'blur(20px)' : null) : null;
	}};
	opacity: ${(props) => {
		return props.show ? (props.next ? 0 : 1) : 0;
	}};
	${boolTransition};

	h1 {
		color: white;
		margin: 1rem 0;
		margin-left: 1rem;
		text-shadow: 0 0 10px white;
	}
`;

export const SkillList = styled.div`
	display: grid;
	grid-template-columns: 15% 65%;
	align-items: center;
	justify-content: center;
	margin: 1% 0;
	width: 60%;
	height: auto;
	transform: ${(props) => (props.next ? 'scale(0.5)' : 'scale(1)')};
	opacity: ${(props) => {
		return props.show ? (props.next ? 0 : 1) : 0;
	}};
	filter: ${(props) => {
		return props.show ? (props.next ? 'blur(20px)' : null) : null;
	}};
	${boolTransition};

	@media (max-width: 760px) {
		width: 80%;
	}
`;

export const IconLogo = styled(FontAwesomeIcon)`
	color: white;
	filter: ${(props) => (props.head ? ' drop-shadow(0 0 10px white)' : null)};
	font-size: ${(props) => (props.head ? '2.5rem' : '1.5rem')};
`;

export const MyProject = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: center;	

	p {
		color: ${(props) => (props.mark ? '#00ff76' : 'white')};
		margin: 0.3rem 0;
		margin-left:25%;
	}
`;

export const SubProject = styled.div`
	display: grid;
	grid-template-columns: 50% 50% ;
	grid-template-rows:60% 40%;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin:.7rem 0;
`;

const linkButton = css`
font-weight: bold;
cursor: pointer;
	background:#00ff76;
	padding:0.3rem;	
	width:50%;
	margin-left:22% ;
	/* margin:0 auto; */
	&:hover{
	box-shadow:0 0 10px 2px green;	
	}
`

const detailButton = css`
cursor: pointer;
border:1px solid #00ff76;
color:#00ff76;
	padding:0.3rem;	
	margin-left:22%;
	width:50%;
	&:hover{
		font-weight:bold;
		text-shadow:0 0 10px white;
	}

`

export const ProjectText = styled.p`
	color: ${(props) => (props.mark ? '#00ff76 !important' : 'white')};	
	margin: 0.3rem auto;	
	z-index:10;

${props => props.link ? linkButton : null}
${props => props.detail ? detailButton : null}

margin:${props => props.soon ? "0 !important" : null};

`;
