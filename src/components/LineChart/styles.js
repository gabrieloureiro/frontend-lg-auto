import styled from "@emotion/styled";

export const LineChartWrapper = styled.div`
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	margin: auto 0;

	g {
		text {
			fill: rgba(235, 235, 245, 0.3) !important;
		}
		line {
			stroke-width: 0.25px;
		}
	}

	@media screen and (max-width: 1100px) {
		height: ${({ withAxis, height }) =>
			withAxis ? "calc(100% - 50px)" : height};
	}
`;
