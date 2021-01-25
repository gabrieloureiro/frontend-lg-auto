import React from "react";
import { StyledCol } from "./styles";

export const Col = ({ children, ...rest }) => (
	<StyledCol {...rest}>{children}</StyledCol>
);
