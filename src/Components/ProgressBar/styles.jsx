import styled from 'styled-components'

export const Progress = styled.div`
	width: 80%;
	height: 0.5rem;
	background: #adadad;
	border-radius: 40px;
	position: relative;

	&:before {
		content: '';
		width: ${(props) => {
		return props.fill ? props.param + '%' : 0;
	}};
		height: 0.5rem;
		background: linear-gradient(90deg, #00ffe2, #00ff76);
		box-shadow: 0 0 10px #00ff76;
		border-radius: 40px;
		position: absolute;
		transition: all 1.5s ease-in-out;
	}

	&:after {
		content: '';
		width: 0.5rem;
		height: 0.5rem;
		left: ${(props) => {
		return props.fill ? props.param + '%' : 0;
	}};
		background: #00ff76;
		border-radius: 40px;
		box-shadow: 0 0 5px 5px #00ff76;
		position: absolute;
		transition: all 1.5s ease-in-out;
	}
`;