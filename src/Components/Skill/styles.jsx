import styled, { css } from 'styled-components';

const customline = css`
	background: #00ff76;
	width: 0.5rem;
	position: absolute;
	box-shadow: 0 0 10px #00ff76;

	@media(max-width:760px){
		display:none;
	}
`;
const topConfig = css`
	height: 8vw;
	top: 0;
`;

const bottomConfig = css`
	height: 8vw;
	bottom: 0;
`;

export const SkillDetail = styled.div`
	width: 95vw;
	height: 100vh;
	position: absolute;
	left: 5vw;
	display: flex;
	background: #292929;
	justify-content: center;
	align-items: center;

	@media(max-width:760px){
		left:0;
		width:100vw;
	}
`;

export const CenterLine = styled.div`
	height: 100vh;
    left: 47vw;
    transform:${props => props.show ? "scale(1) translateY(0)" : "scale(0.1) translateY(10vh)"};
    opacity:${props => props.show ? 1 : 0};
    transition:all 1.25s ease-out;
	${customline};
`;

export const TopLeft = styled.div`
	position: absolute;
	border-bottom-left-radius: 30%;
    left: 28vw;
    transform:${props => props.show ? "translateY(0)" : "translateY(-50rem)"};
    transition:all 3s ease-out;
	${topConfig};
	${customline};

	&:before {
		content: '';
		height: 9vw;
		bottom: -8vw;
		left: 2.2vw;
		border-top-left-radius: 15%;
		transform: rotate(-30deg);
		${customline};
	}
`;

export const TopRight = styled.div`
	border-bottom-right-radius: 30%;
    left: 64.5vw;
    transform:${props => props.show ? "translateY(0)" : "translateY(-50rem)"};
    transition:all 3s ease-out;
	${topConfig};
	${customline};

	&:before {
		content: '';
		height: 9vw;
		bottom: -8vw;
		right: 2.2vw;
		border-top-right-radius: 15%;
		transform: rotate(30deg);
		${customline};
	}
`;

export const BottomLeft = styled.div`
	border-top-left-radius: 30%;
	left: 28vw;	
    transform:${props => props.show ? "translateY(0)" : "translateY(50rem)"};
    transition:all 3s ease-out;

    ${bottomConfig};
	${customline};

	&:before {
		content: '';
		height: 9vw;
		top: -8vw;
		left: 2.2vw;
		border-top-left-radius: 15%;
		transform: rotate(30deg);
		${customline};
	}
`;

export const BottomRight = styled.div`
	border-top-right-radius: 30%;
    left: 64.5vw;
    transform:${props => props.show ? "translateY(0)" : "translateY(50rem)"};
    transition:all 3s ease-out;

	${bottomConfig};
	${customline};

	&:before {
		content: '';
		height: 9vw;
		top: -8vw;
		right: 2.2vw;
		border-top-right-radius: 10%;
		transform: rotate(-30deg);
		${customline};
	}
`;
