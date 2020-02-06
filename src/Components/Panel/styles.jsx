import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iChild = css`
	&:nth-child(1) {
		transition-delay: 0s;
	}
	&:nth-child(3) {
		transition-delay: .25s;
	}
	&:nth-child(5) {
		transition-delay: .5s;
	}
	&:nth-child(7) {
		transition-delay: .75s;
	}
`;

const pChild = css`
	&:nth-child(2) {
		transition-delay: 0s;
	}
	&:nth-child(4) {
		transition-delay: .25s;
	}
	&:nth-child(6) {
		transition-delay: .5s;
	}
	&:nth-child(8) {
		transition-delay: .75s;
	}
`;

const panelList = css`
	cursor: pointer;
	color: white;
	opacity:${(props) => (props.show ? 1:0)};
	/* filter: ${(props) => (props.show ? 'blur(0)' : 'blur(50px)')}; */
	transition: ${(props) => (props.delay ? "all 0.4s" : "all .75s ease-out")};
`;

export const PanelContainer = styled.div`
	position: absolute;
	height: 100vh;
	width: 5vw;
	background: #222222;
`;

export const PanelSizer = styled.div`
	position: absolute;
	height: 50vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transform: ${(props) => (props.show ? 'translateY(25vh)' : 'translateY(0)')};
	transition: all 2s;

	* {
		${(props) => (props.delay ? null : iChild)}
		${(props) => (props.delay ? null : pChild)}
	}
`;

export const PanelIcon = styled(FontAwesomeIcon)`
	${panelList}

	font-size: 2rem;
	margin-top: 1.5rem;
	
	&:hover {
		color: #00ff76;
	}

	&:hover + p {
		color: #00ff76;
	}
`;

export const Pargaraph = styled.p`
	${panelList}

	margin: 0.5rem;
	font-size: 0.8rem;
	
	&:hover {
		color: #00ff76;
	}
	&:hover + i {
		color: #00ff76;
	}
`;
