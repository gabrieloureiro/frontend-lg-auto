import React from "react";
import { StyledTable, THead, TRow, TBody, THCell } from "./styles";

const Table = ({ half = false, full = false, columns }) => {
	return (
		<StyledTable half={half} full={full}>
			<THead>
				<TRow>
					{columns.map((col) => {
						return <THCell>{col.name}</THCell>;
					})}
				</TRow>
			</THead>
			<TBody></TBody>
		</StyledTable>
	);
};

export default Table;
