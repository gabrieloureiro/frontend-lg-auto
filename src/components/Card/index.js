import React from "react";
import { CardWrapper, TopHolder, Content } from "./styles";

const Card = ({ title, children, ...rest }) => {
	return (
		<CardWrapper {...rest}>
			<TopHolder>{title}</TopHolder>
			<Content>{children}</Content>
		</CardWrapper>
	);
};

export default Card;
