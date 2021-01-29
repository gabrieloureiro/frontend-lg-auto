import styled from "@emotion/styled";

export const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	height: auto;
	padding: 32px;
`;

export const Container = styled.div`
	display: block;
	max-width: 100%;
	min-height: 100%;
	padding: 88px 24px 24px;
	background: ${(props) => props.theme.body};
	transition: padding 0.5s;

	@media screen and (min-width: 767px) {
		padding: ${({ sideBarCollapse }) =>
		sideBarCollapse ? "88px 24px 24px 92px" : "88px 24px 24px 24px"};
	}
`;
