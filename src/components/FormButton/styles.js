import styled from '@emotion/styled';

export const StyledButton = styled.button`
	padding: 6px 12px;
	background: ${props => props.cancel ? '#911111' : '#3e6e29'};
	color: #fff;
	transition: all 0.5s ease;
	border-radius: 6px;
	margin-left: 16px;
	font-weight: 500;

	&:hover {
		background: ${props => props.cancel ? '#b92222' : '#87d068'}
	}
`;
