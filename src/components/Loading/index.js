import React from "react";
import { StyledLoading, LoadingContent, LoadingTitle } from "./styles";

const Loading = () => (
	<StyledLoading>
		<LoadingContent>
			<LoadingTitle>Carregando...</LoadingTitle>
		</LoadingContent>
	</StyledLoading>
);

export default Loading;
