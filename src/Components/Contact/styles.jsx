import styled from 'styled-components';

export const ContactContainer = styled.div`
	position: absolute;
	left: 5vw;
	width: 95vw;
	height: 100vh;
	background: #292929;
	display: grid;
	grid-template-columns: 10% 40% 50%;

	@media(max-width:760px){
		width:100vw;
		left:0;
		display:flex;
		flex-direction:column;
	}
`;


