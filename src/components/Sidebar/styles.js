import { IconBase } from "react-icons";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledSidebar = styled.div`
	background: ${(props) => props.theme.primaryColor};
	width: 68px;
	position: fixed;
	height: calc(100% - 64px);
	text-align: center;
	z-index: 5;
	top: 64px;
	padding: 12px 0;
	transition: all 0.5s ease-out;

	transform: ${(props) =>
		props.collapsed ? "translateX(-68px)" : "translateX(0px)"};

	/* @media screen and (max-width: 767px) {
		transform: ${(props) =>
		!props.collapsed ? "translateX(-68px)" : "translateX(0px)"};
	} */
`;

export const Tooltip = styled.div``;

export const Navigation = styled.nav``;

export const NavigationList = styled.ul``;

export const NavigationItem = styled.li`
	margin: 0 6px;
	margin-bottom: 22px;
	transition: all 0.2s ease;

	&:last-child {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
	}

	&:hover {
		transform: translateY(-3px);
	}
`;

export const NavigationLink = styled(Link)`
	padding: 12px 0;
	display: block;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		background-color: #fefeff;
		width: 100%;
		height: 100%;
		border-radius: 8px;
		opacity: 0;
		pointer-events: none;
	}

	&:hover {
		&::after {
			opacity: 0.15;
		}
	}

	${(props) =>
		props.active &&
		`


    &::before {
      content: '';
      width: 4px;
      height: 28px;
      background: #fff;
      border-radius: 12px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }

    &::after {
      opacity: .15;
    }
  `}
`;

export const Icon = styled(IconBase)`
	font-size: 24px;
	color: #fff;
`;

export const CollapseButton = styled.div`
	cursor: pointer;
	width: 30px;
	height: 30px;
	position: absolute;
	right: -30px;
	top: 70px;
	background: ${(props) => props.theme.primaryColor};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0 8px 8px 0;
`;
