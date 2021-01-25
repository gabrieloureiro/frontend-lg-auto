import styled from "@emotion/styled/macro";
import { shade } from "polished";
import { IconBase } from "react-icons";
import mediaQuery from "~/styles/mediaQuery";

export const StyledBar = styled.div`
	padding: 8px 24px 8px 0px;
	height: 64px;
	display: flex;
	justify-content: space-between;
	position: fixed;
	z-index: 5;
	width: 100%;
	background: ${(props) =>
		props.theme.title === "light"
			? shade(0.12, props.theme.background)
			: props.theme.background};
`;

export const Left = styled.div`
	display: flex;
	align-items: center;
	margin-right: auto;
`;

export const Right = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`;

export const UserPlacement = styled.div`
	background: ${(props) => props.theme.body};
	padding: 8px 12px;
	border-radius: 8px;
	display: flex;
	align-items: center;
`;

export const ImageUser = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 6px;
	object-fit: cover;
`;

export const Username = styled.span`
	color: #79828e;
	display: none;
	padding: 0 6px;
	transition: all 0.5s ease;
	${mediaQuery.xs`
	display: inline;
		margin: 0 12px;
	`}
`;

export const ArrowWrapper = styled.div`
	padding: 4px 4px 4px 12px;
	cursor: pointer;
	transition: all 0.5s ease;
	svg {
		path {
			fill: ${(props) => props.theme.text};
		}
	}

	&:hover {
		svg {
			path {
				fill: ${(props) => props.theme.lightBlue};
			}
		}
	}

	${mediaQuery.xs`
		padding: 8px 4px 4px 4px;
	`}
`;

export const Icon = styled(IconBase)`
	color: ${(props) =>
		props.theme.title === "dark" ? "#fff" : props.theme.primaryColor};
	z-index: 2;
	font-size: 32px;
`;

export const SmallIcon = styled(IconBase)`
	color: ${(props) =>
		props.theme.title === "dark" ? "#fff" : props.theme.primaryColor};
	font-size: 16px;
`;

export const IconWrapper = styled.div`
	padding: 8px;
	background: ${(props) => props.theme.body};
	border-radius: 8px;
	cursor: pointer;
	position: absolute;
	transition: transform 0.5s ease;

	svg {
		path {
			fill: #79828e;
		}
	}

	&:first-child {
		left: -84px;
	}

	&:nth-child(2) {
		left: -42px;
	}

	&:hover {
		border: ${(props) => `1.5px solid ${props.theme.blue}`};
		transform: translateY(-3px);
	}

	${mediaQuery.xs`
		&:first-child {
		left: -96px;
	}

	&:nth-child(2) {
		left: -48px;
	}
	`}
`;

export const CollapseButton = styled.div`
	cursor: pointer;
	min-width: 68px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
