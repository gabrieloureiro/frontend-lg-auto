import styled from '@emotion/styled'
import { Form as StyledForm } from "@unform/web";
import UserCard from "~/components/UserCard";
import mediaQuery from '~/styles/mediaQuery'

export const Form = styled(StyledForm)`
	display: flex;
	flex-direction: column;
	width: 400px;
	margin: 0 auto;
`

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	height: 40px;
	background: ${props => props.theme.primaryColor};
	color: ${props => props.theme.background};
`;

export const Card = styled.div`
	margin: 16px;
	padding: 16px;
	border-radius: 6px;
	background: ${props => props.theme.background};
	width: 25%;
	height: auto;

	p {
		width: 100%;
		font-size: 14px;
		padding: 6px 0;
	}
`;

export const ClientCard = styled(UserCard)`

`;
