import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SubContainer = styled.div`
	color: #00ff76;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem 0;
	border-right: 2px solid #00ff76;	
	transform:translateY(100rem);
	transition: all 0.5s;

	&:nth-child(1) {
		transform: ${(props) => (props.isShow ? 'translateY(0rem)' : null)};
		transition-delay: 0.2s;
	}
	&:nth-child(2) {
		transform: ${(props) => (props.isShow ? 'translateY(0rem)' : null)};
		transition-delay: 0.7s;
	}
	&:nth-child(3) {
		transform: ${(props) => (props.isShow ? 'translateY(0rem)' : null)};
		transition-delay: 1.2s;
	}

	h1 {
		font-size: 1.5rem;
		text-shadow: 0 0 5px #00ff76;
		margin: 1rem auto;
	}

	@media (max-width:760px) {
		height:auto;
		transform:translateY(0);
		background:#292929;
		border:none;
		border-bottom: 2px solid #00ff76;
	}
`;
export const IconLogo = styled(FontAwesomeIcon)`
	filter: drop-shadow(0 0 5px #00ff76);
	font-size: 3rem;
`;

export const ListParent = styled.ul`
	color: white;
	list-style: none;
	text-align: center;
	padding: 0;
`;

export const List = styled.li`
	margin: 0.5rem 0;
`;
