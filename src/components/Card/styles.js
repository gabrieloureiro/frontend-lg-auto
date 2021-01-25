import styled from "@emotion/styled/macro";

export const CardWrapper = styled.div`
	display: block;
	padding: 24px;
	border-radius: 8px;
	background-color: ${(props) => props.theme.body};
	height: auto;
`;

export const TopHolder = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 75px;
	border-bottom: 0.5px solid
		${(props) =>
			props.theme.title === "dark" ? props.theme.background : props.theme.body};
	padding: 0 12px;
	font-size: 16px;
	color: ${(props) => props.theme.text};
`;

export const Content = styled.div`
	padding: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: calc(100% - 57px);
`;
