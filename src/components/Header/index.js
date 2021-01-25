import React from "react";
import { StyledHeader, Title, Subtitle } from "./styles";

const Header = ({ title, subtitle, featuredTitle }) => {
	return (
		<StyledHeader>
			{title && <Title hasSubtitle={!!subtitle}>{title}</Title>}
			{subtitle && <Subtitle>{subtitle}</Subtitle>}
		</StyledHeader>
	);
};

export default Header;
