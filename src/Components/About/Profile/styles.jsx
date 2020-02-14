import styled from 'styled-components';

export const Profile = styled.div`
	background: #292929;
	width: 100%;
`;

export const ProfileContainer = styled.div`
	height:100vh;
	position: relative;
	padding: 0 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	opacity:${props => props.show ? 1 : 0};
	filter: ${(props) => (props.show ? '' : 'blur(10px)')};
	transition:all 3s;

	@media(max-width:760px){
		position:absolute;
		top:0;
		left:0;
		align-items:center;
		background:#292929;
	}
`;

export const Information = styled.div`
	margin-bottom: 1rem;
	width: 90%;

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

	@media(max-width:760px){
		width:100%;
		text-align:center;
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
	display: grid;
	grid-template-columns: 35% 65%;
	justify-content: center;
	align-items: center;

	p {
		color: #00ff76;
		font-weight: bold;

		@media(max-width:760px){
			font-weight: normal;
			font-size:0.8rem;
		}
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
