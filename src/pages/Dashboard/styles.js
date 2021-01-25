import styled from "@emotion/styled";
import Card from "~/components/Card";
import { Row as StyledRow } from "~/components/Row";
import mediaQuery from "~/styles/mediaQuery";
import arrow from "../../../public/assets/svgs/small-arrow.svg";

export const CardChart = styled(Card)`
	height: 250px;
	width: 100%;
	margin-top: 16px;
	background: ${(props) =>
		props.theme.title === "dark" ? props.theme.body : props.theme.background};

	${mediaQuery.s`
		width: calc(33% - 4px);
	`}
`;

export const Row = styled(StyledRow)`
	justify-content: space-between;
`;

export const BoxChart = styled.div`
	align-items: center;
	flex-wrap: nowrap;
	border-radius: 8px;
	padding: 12px;
	flex-direction: column;
	background: ${(props) =>
		props.theme.title === "dark" ? props.theme.background : props.theme.body};
`;

export const BigNumber = styled.span`
	font-size: 32px;
	font-weight: bold;
	margin-left: auto;
`;

export const Title = styled.span`
	font-size: 16px;
	font-weight: 500;
`;

export const Select = styled.select`
	height: 24px;
	border-radius: 6px;
	padding-left: 11px;
	cursor: pointer;
	appearance: none;
	background-repeat: no-repeat;
	background-size: 14px 8px;
	background-position: 95% center;
	background-color: ${(props) =>
		props.theme.title === "dark" ? props.theme.body : props.theme.background};
	width: 127px;
	font-size: 11px;
	line-height: 13px;
	color: ${(props) => props.theme.text};
	background-image: url(${arrow});
	margin-left: auto;

	&:not(:last-child) {
		margin-right: 7px;
	}
`;
