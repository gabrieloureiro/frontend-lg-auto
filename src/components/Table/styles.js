import styled from "@emotion/styled";

export const StyledTable = styled.table`
	width: ${(props) => (props.full ? "100%" : props.half ? "50%" : "auto")};
`;

export const THead = styled.thead`
	background: ${(props) => props.theme.primaryColor};
	color: ${(props) =>
		props.theme.title === "dark" ? props.theme.text : props.theme.background};
`;

export const TBody = styled.tbody``;

export const THCell = styled.td`
	padding: 16px;
`;

export const TRow = styled.tr`
	border-radius: 8px 8px 0 0;
`;
