import styled, { keyframes } from 'styled-components';

const shadow = keyframes`
    0%{
        box-shadow: 0 0 10px 1px #00ff76;        
    }
    
    25%{
        box-shadow: 0 0 10px 3px #00ff76;
    }
    50%{
        box-shadow: 0 0 10px 5px #00ff76;
    }
    75%{
        box-shadow: 0 0 10px 3px #00ff76;
    }
    100%{
        box-shadow: 0 0 10px 1px #00ff76;
    }

`;

export const AboutMeContainer = styled.div`
	width: 95vw;
	height: 100vh;
	position: absolute;
	left: 5vw;
	display: grid;
	grid-template-columns: 55% 45%;

	span {
		position: absolute;
		width: 100%;
		height: 0.3rem;
		box-shadow: 0 0 10px 2px #00ff76;
		background: #00ff76;
		z-index: 1;
		&:nth-child(1) {
			top: 5%;
		}

		&:nth-child(2) {
			bottom: 5%;
		}
	}
`;
export const Profile = styled.div`
	background: #292929;
	width: 100%;
	position: relative;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Information = styled.div`
	margin-bottom: 1rem;
	h1 {
		margin-bottom: 0;
		font-weight: normal;
		color: #00ff76;
	}
	h2 {
		margin: 0;
		margin-top: 0.1rem;
		color: #ffffff;
		font-size: 1rem;
		border-bottom: 1px solid rgba(185, 185, 185, 0.5);
		padding-bottom: 1rem;
	}
	p {
		color: white;
		margin-bottom: 1rem;
	}
`;

export const Attributes = styled.div`
	width: 100%;

	h1 {
		margin-bottom: 0;
		font-weight: normal;
		color: #00ff76;
	}
`;

export const SubAttributes = styled.div`
	p {
		color: #00ff76;
		font-weight: bold;
	}
`;

export const Progress = styled.div`
	width: 80%;
	height: 0.5rem;
	background: #adadad;
	border-radius: 40px;
	position: relative;

	&:before {
		content: '';
		width: 80%;
		height: 0.5rem;
		background: linear-gradient(90deg, #00ffe2, #00ff76);
		box-shadow: 0 0 10px #00ff76;
		border-radius: 40px;
		position: absolute;
	}

	&:after {
		content: '';
		width: 0.5rem;
		height: 0.5rem;
		left: 80%;
		background: #00ff76;
		border-radius: 40px;
		box-shadow: 0 0 5px 5px #00ff76;
		position: absolute;
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
	animation: ${shadow} 3s linear infinite;

	&:before {
		content: '';
		position: absolute;
		width: 12rem;
		height: 12rem;
		right: -13.5rem;
		border-radius: 50%;
		top: -6.5rem;
		border: 1rem solid #00ff76;
		animation: ${shadow} 3s linear infinite;
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

	h1 {
		position: absolute;
		left: 25%;
		top: -3rem;
		color: white;
		margin: 0;
	}
`;
