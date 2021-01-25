import styled from "@emotion/styled";

export const StyledHeader = styled.header`
	font-style: normal;
	width: 100%;
	padding: 32px 0;
`;

export const Title = styled.h1`
	font-style: normal;
	font-weight: bold;
	font-size: 35px;
	line-height: 35px;
	display: flex;
	align-items: center;
	color: ${(props) => props.theme.text};
`;

export const Subtitle = styled.h2`
	font-size: 14px;
	font-weight: 400;
	font-size: 18px;
	color: rgba(40, 41, 61, 0.57);
	margin-bottom: 16px;
`;
