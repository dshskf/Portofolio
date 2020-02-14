import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 10%;
	align-items: center;

	*::placeholder {
		color: white;
	}

	@media (max-width:760px) {
		background:#292929 !important;
		margin-top:30vh;
	}
`;

export const SubInput = styled.div`
	width: 50%;
	min-height: 3rem;
	height: 10%;
	margin: 0.5rem auto;

	label {
		color: white;
		text-shadow: 0 0 5px white;
	}

	&:nth-child(4) {
		min-height: 3rem;
		height: 20%;
	}
	&:nth-child(5) {
		min-height: 3rem;
		height: 20%;
	}

	@media (max-width:760px) {
		width:80%;
		margin:1rem auto;
		background:#292929;
	}
`;

export const InputField = styled.input`
	margin-top: 0.5rem;
	height: 50%;
	display: block;
	border: none;
	border-bottom: 2px solid #00ff76;
	background: transparent;
	color: #00ff76;
	padding-left: 0.4rem;
	width: 100%;
	outline: none;
`;

export const TextArea = styled.textarea`
	margin-top: 0.5rem;
	display: block;
	height: 70%;
	width: 100%;
	padding-top: 0.4rem;
	padding-left: 0.4rem;
	resize: none;
	outline: none;
	border: 2px solid #00ff76;
	background: transparent;
	color: #00ff76;
`;

export const SubmitButton = styled.input`
	color: white;
	font-weight: bold;
	padding: 0.5rem 0;
	margin-top: 1rem;
	border: none;
	width: 105%;
	text-decoration: none;
	background: #00ff76;
	cursor: pointer;
`;
