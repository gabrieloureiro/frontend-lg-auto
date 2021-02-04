import styled from '@emotion/styled'

export const StyledInput = styled.input`
	display: flex;
	width: calc(33.3% - 24px);
	margin: 12px;
	padding: 12px 0;
	border-radius: 0;
	font-size: 14px;
	background-color: transparent;
	border-bottom: 1px solid ${props => props.fieldError ? '#f10' : '#a1a1a1'};
	color: ${props => '#a1a1a1'};
	letter-spacing: 0.7px;
	transition: all 0.2s ease;

	&::-webkit-input-placeholder {
		color: ${props => props.fieldError ? '#f10' : props.theme.text};
	}

	&:focus {
		border-bottom: 1px solid ${props => props.theme.text};
		color: ${props => props.theme.text};

		&::-webkit-input-placeholder {
			color: ${props => props.theme.text};
		}
	}
`;

export const Error = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
`;


