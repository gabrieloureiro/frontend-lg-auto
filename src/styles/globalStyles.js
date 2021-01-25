import React from "react";
import { Global, css } from "@emotion/core";

const GlobalStyles = () => {
	return (
		<Global
			styles={css`
				*,
				*::after,
				*::before {
					font-family: Montserrat, sans-serif;
					box-sizing: border-box;
					outline: 0;
					margin: 0;
					padding: 0;
					border: 0;
					backface-visibility: hidden;
					-webkit-font-smoothing: antialiased;
					scroll-behavior: smooth !important;
					transition: color, background-color 0.5s ease-out;
				}

				button {
					cursor: pointer;
				}

				ul,
				ol {
					list-style: none;
				}

				a {
					text-decoration: none;
				}

				body,
				html,
				#root {
					height: 100%;
					min-height: -webkit-fill-available;
				}
			`}
		/>
	);
};

export default GlobalStyles;
