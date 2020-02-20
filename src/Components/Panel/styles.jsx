import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const panelList = css`
	cursor: pointer;
	color: ${(props) => (props.highlight ? '#00ff76' : 'white')};
	filter: ${(props) => (props.highlight ? 'drop-shadow(0 0 5px #00ff76)' : null)};	
	opacity:1;	
	transition:${props => props.animation ? null : "all .5s"};
`;

export const PanelContainer = styled.div`
	position: absolute;
	height: 100vh;
	width: 5vw;
	background: #222222;
	z-index:10;
	@media (max-width:760px) {
		top:0;
		height:10vh;
		width:100vw;
		position:fixed;
	}
`;

export const PanelSizer = styled.div`
	position: absolute;
	height: 50vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transform:translateY(25vh);
	transition:${props => props.animation ? null : "all 2s"};

	@media (max-width:760px) {
		flex-direction: row;
		transform:translateY(0);
		height: 10vh;
	}
`;

export const PanelIcon = styled(FontAwesomeIcon)`
	${panelList}

	font-size: 2rem;
	margin-top: 1.5rem;

	&:hover {
		color: #00ff76;
		filter: drop-shadow(0 0 5px #00ff76);
	}

	&:hover + p {
		color: #00ff76;
	}

	@media (max-width:760px) {
		margin:0 5%;
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

	@media (max-width:760px) {
		display:none;
	}
`;
