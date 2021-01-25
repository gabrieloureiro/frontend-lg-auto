import React from "react";
import { StyledRow } from "./styles";

export const Row = ({ full, children, ...rest }) => (
	<StyledRow full={full} {...rest}>
		{children}
	</StyledRow>
);
