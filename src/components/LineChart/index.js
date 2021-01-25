import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { LineChartWrapper } from "./styles";
import { format } from "d3-format";

const LineChart = ({
	data,
	color = `${(props) => props.theme.lightBlue}`,
	showArea = false,
	height = "100%",
	width = "100%",
	withAxis = false,
	sliceTooltip,
	withTooltip = false,
}) => {
	return (
		<LineChartWrapper height={height} width={width}>
			<ResponsiveLine
				curve={withAxis ? "cardinal" : "natural"}
				margin={
					withAxis
						? { top: 50, bottom: 20, left: 50, right: 30 }
						: { top: 0, right: 0, bottom: 0, left: 0 }
				}
				data={data}
				enableArea={showArea}
				xScale={{ type: "point" }}
				yScale={{
					type: "linear",
					min: "auto",
					max: "auto",
					stacked: true,
					reverse: false,
				}}
				axisLeft={
					withAxis
						? {
								format: (value) => {
									return format(".3s")(value);
								},
						  }
						: null
				}
				colors={withAxis ? ["#5E5CE6", "#363636"] : [color]}
				layers={["axes", "areas", "lines", "mesh", "grid", "slices"]}
				enableGridX={false}
				enableGridY={withAxis ? true : false}
				enableCrosshair={false}
				isInteractive={true}
				animate={withAxis ? true : false}
				lineWidth={withAxis ? 7 : 3}
				enableSlices={withTooltip ? "y" : false}
				sliceTooltip={sliceTooltip}
				motionStiffness={95}
			/>
		</LineChartWrapper>
	);
};

export default LineChart;
