import styled from '@emotion/styled/macro';
import { Row as StyledRow } from '~/components/Row'
import { FiPlus } from 'react-icons/fi';

export const Tooltip = styled.div`
`;

export const Button = styled.button`
	width: auto;
	display: flex;
	align-items: center;
	background: ${props => props.theme.primaryColor};
	padding: 8px;
	border-radius: 50%;
	text-transform: uppercase;
	position: absolute;
	top: -64px;
	margin-right: 4px;

	&:hover {
		background: ${props => props.theme.primaryColorLight};

	}

	@media screen and (max-width: 374px) {
		position: unset;
		margin: 0 0 16px 0;
	}
`;

export const PlusIcon = styled(FiPlus)`
	color: #fff;
`;

export const Row = styled(StyledRow)`
	justify-content: ${props => props.end ? 'flex-end' : 'unset'};
	position: ${props => props.relative ? 'relative' : 'unset'};

	@media screen and (max-width: 374px) {
		justify-content: center;
	}
`;
