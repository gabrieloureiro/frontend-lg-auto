import styled from '@emotion/styled';

export const UserCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: calc(33.3% - 12px);
	background: ${props => props.theme.background};
	border-radius: 6px;
	min-height: 200px;
	padding: 16px;
	margin: 0 16px 16px 0;

	&:hover {
		border: 1.25px solid ${props => props.theme.primaryColorLight};
	}

	&:nth-child(3n) {
		margin: 0 0 16px 0;
	}

	@media screen and (max-width: 992px) {
		width: calc(50% - 12px);

		&:nth-child(3n) {
			margin: 0 16px 16px 0;
		}

		&:nth-child(2n) {
			margin: 0 0 16px 0;
		}
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		margin: 0 0 16px 0;

		&:nth-child(3n) {
			margin: 0 0 16px 0;
		}

		&:nth-child(2n) {
			margin: 0 0 16px 0;
		}
	}
`;

export const UserImage = styled.div`
	margin: 0 auto;
	border-radius: 50%;
	width: 85px;
	height: 85px;
	background: #a1a1a1;
`;

export const UserName = styled.span`
	display: flex;
	justify-content: center;
	padding: 16px 0;
	color: ${props => props.theme.text};
`;
