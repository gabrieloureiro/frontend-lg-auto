import styled from "@emotion/styled";

export const StyledRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: ${({ full }) => (full ? "100%" : "auto")};
`;
