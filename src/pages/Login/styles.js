import styled from "@emotion/styled";
import { Row as StyledRow } from "~/components/Row";
import { shade } from 'polished'

export const Holder = styled.div`
	background: rgb(18, 18, 20);
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100%;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 24px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Header = styled.div`
	width: 100%;
	padding-right: 32px;
	max-width: 400px;

	@media screen and (max-width: 768px) {
		padding-bottom: 32px;
		max-width: 333px;
	}
`;



export const TitleWrapper = styled(StyledRow)`
	padding-bottom: 42px;
	align-items: center;
`;

export const Image = styled.img`
	width: 56px;
	height: 56px;
`;

export const Title = styled.h1`
	font-weight: 500;
	font-size: 20px;
	color: #fff;

	padding-left: 16px;
	text-transform: uppercase;
`;

export const Subtitle = styled.h2`
	font-weight: bold;
	font-size: 42px;
	color: #fff;
	margin: 0 auto;
`;

export const Input = styled.input`
	padding: 15px;
	padding-left: 0;
	display: flex;
	width: 100%;

	border-radius: 0;
	font-size: 16px;
	margin-bottom: 32px;
	background-color: transparent;
	border-bottom: 1px solid #fff;
	color: #fff;
	letter-spacing: 1.2px;
	transition: all 0.2s ease;

	&::-webkit-input-placeholder {
		color: #fff;
	}

	&:focus {
		border-bottom: 1px solid #f76a36;
		color: #f76a36;
		&::-webkit-input-placeholder {
			color: #f76a36;
		}
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 54px;
	background: rgb(32, 32, 36);
	border-radius: 8px;
	min-width: 300px;
`;

export const Button = styled.button`
	appearance: none;
	font-weight: 500;
	font-size: 16px;
	line-height: 26px;
	text-align: center;
	color: #fff;
	padding: 12px 0;
	width: 100%;
	background: ${shade(0.4, '#f76a36')};
	letter-spacing: 1.2px;
	text-transform: uppercase;
	cursor: pointer;
	transition: all 0.5s ease;
	border-radius: 8px;

	&:hover {
		background: #f76a36;
	}
`;
