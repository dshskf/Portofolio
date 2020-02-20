import styled, { keyframes } from 'styled-components';

const shadow = keyframes`
    0%{
        box-shadow: 0 0 15px 1px #00ff76;        
    }    
    25%{
        box-shadow: 0 0 15px 3px #00ff76;
    }
    50%{
        box-shadow: 0 0 15px 5px #00ff76;
    }
    75%{
        box-shadow: 0 0 15px 3px #00ff76;
    }
    100%{
        box-shadow: 0 0 15px 1px #00ff76;
    }
`;

export const Detail = styled.div`
	background: #292929;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		color: #00ff76;
	}
`;

export const AboutBox = styled.div`
	background-size: cover;
	width: 100%;
	min-height: 25rem;
	height: 60%;
	position: relative;
`;

export const SubBox = styled.div`
	position: absolute;
	width: 50%;
	height: 1rem;
	top: 47%;
	background: #00ff76;
	text-align: right;
	transform: ${(props) => (props.show ? null : 'translateX(-100rem)')};
	animation: ${shadow} 3s linear infinite;
	transition:${props => props.animation ? null : "all 1.5s ease-out"} ;

	&:before {
		content: '';
		position: absolute;
		width: 12rem;
		height: 12rem;
		right: -13.5rem;
		border-radius: 50%;
		top: -6.5rem;
		border: 1rem solid #00ff76;
		transform: ${(props) => (props.show ? null : 'translateX(-100rem)')};
		animation: ${shadow} 3s linear infinite;
		transition: ${props => props.animation ? null : "all 1s ease-out"} ;

		@media(max-width:760px){
		border:none;
		animation:none;
	}
	}

	span {
		width: 2rem;
		height: 2rem;
		margin-left: 3rem;
		border: 4px solid #00ff76;
		background: none;
		box-shadow: none;
		border-radius: 5px;
		transition: all 0.5s;
	}

	@media(max-width:760px){
		border:none;
		animation:none;
		background:none;
	}
`;

export const Title = styled.h1`
	position: absolute;
	left: 25%;
	top: ${props => props.show ? "-3.5rem" : "-1rem"} ;
    opacity:${props => props.show ? 1 : 0} ;
	color: white !important;
    text-shadow:0 0 10px white;
	margin: 0;
	transition:all 2s;
	
	@media(max-width:760px){
		display:none;
	}
`;
