import styled from '@emotion/styled'
import { Form as StyledForm } from "@unform/web";
import { Row as StyledRow } from '~/components/Row'


export const Form = styled(StyledForm)`
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
`;

export const Row = styled(StyledRow)`
	justify-content: ${props => props.end ? 'flex-end' : 'unset'};
	padding: ${props => props.end ? '16px 0 0 0' : '0'};
`;
