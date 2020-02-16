import styled, { css } from 'styled-components';

export const DetailContainer = styled.div`
	position: absolute;
	width: 40vw;
	height: 101vh;
	background: #292929;
	border-left: 0.5rem solid #00ff76;
	border-right: 0.5rem solid #00ff76;
	text-align: center;
	transform: ${(props) => (props.show ? 'translateY(0)' : 'translateY(-100rem)')};
	z-index: 20;
	transition: all 1s;
`;

export const DetailsBox = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: ${(props) => (props.end ? '2.5rem' : '1rem')};
`;

export const DetailsTitle = styled.div`
	margin: 1rem auto;
	margin-top: 3rem;
	margin-bottom: 2rem;
	padding-bottom: 2rem;
	width: 80%;
	border-bottom: 1px solid white;
`;

export const SubDetails = styled.div`
	text-align: center;
	width: ${(props) => (props.detail ? '38%' : '32%')};
`;

const percentage = css`
	color: #00ff76;
	text-shadow: 0 0 10px #00ff76;
`;

export const Paragraph = styled.p`
	display: inline;
	color: white;

	${(props) => (props.percentage ? percentage : null)}
`;

const title = css`
	text-shadow: 0 0 10px #00ff76;
	margin-bottom: 0.5rem;
`;

export const HeaderText = styled.h1`
	color: #00ff76;
	margin-bottom: 0;

	${(props) => (props.title ? title : null)};
`;

export const ListHeader = styled.h2`
	color: white;
	font-size: 1.5rem;
`;

export const ListParent = styled.ul`
	color: white;
	list-style: none;
	padding: 0;
`;

export const List = styled.li``;

export const LinkButton = styled.a`
	text-decoration: none;
	color: white;
	border: 1px solid #00ff76;
	padding: 0.5rem 1rem;
	margin-top: 2rem;
	cursor: pointer;

	&:hover {
		text-shadow: 0 0 10px white;
		color: #00ff76;
	}
`;

export const CloseLogo = styled.p`
	color: white;
	font-weight: bold;
	font-size: 1.5rem;
	position: absolute;
	cursor: pointer;
	top: 0;
	right: 2%;
	z-index: 10;
`;
