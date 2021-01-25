import styled from "@emotion/styled";

export const StyledLoading = styled.div`
	background: ${(props) => props.theme.primaryColor};
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;

	color: #fff;
`;

export const LoadingContent = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	& > div {
		display: block;
		text-align: center;
	}

	& svg {
		width: 120px;
		height: 120px;
	}
`;

export const LoadingTitle = styled.h2`
	font-size: 32px;
	font-weight: 300;
	padding-top: 25px;
`;
