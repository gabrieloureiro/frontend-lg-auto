import React from "react";
import { LoggedLayout as Layout } from "~/components/Layout";
import LineChart from "~/components/LineChart";
import { CardChart, BoxChart, Row, BigNumber, Title, Select } from "./styles";

import data from "./data.json";

const Dashboard = () => {
	return (
		<Layout title="Dashboard">
			<BoxChart>
				<Row full>
					<Select>
						<option value="total">Total</option>
						<option value="month">Mensal</option>
						<option value="year">Anual</option>
					</Select>
				</Row>
				<Row full>
					<CardChart
						title={
							<>
								<Title>Ordens de serviço</Title>
								<BigNumber>342</BigNumber>
							</>
						}
					>
						<LineChart
							color="#F10"
							showArea
							withTooltip
							data={data.transactionChart}
						/>
					</CardChart>
					<CardChart
						title={
							<>
								<Title>Notas fiscais emitidas</Title>
								<BigNumber>39</BigNumber>
							</>
						}
					>
						<LineChart
							color="#FF500F"
							showArea
							withTooltip
							data={data.transactionChart}
						/>
					</CardChart>
					<CardChart
						title={
							<>
								<Title>Pagamentos por boleto</Title>
								<BigNumber>15</BigNumber>
							</>
						}
					>
						<LineChart
							color="#1890ff"
							showArea
							withTooltip
							data={data.transactionChart}
						/>
					</CardChart>
				</Row>
			</BoxChart>

		</Layout>
	);
};

export default Dashboard;
