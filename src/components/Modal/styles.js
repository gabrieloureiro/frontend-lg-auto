import styled from '@emotion/styled';
import { FiX } from 'react-icons/fi';


export const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
	background-color:rgba(0, 0, 0, 0.35);
	z-index: 5;
`;

export const ModalHeader = styled.div`
	display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
	max-width: 720px;
	min-width: 320px;
	padding: 0 24px;
	border-radius: 8px 8px 0 0;
  background-color: ${props => props.theme.primaryColor};
`;

export const ModalHolder = styled.div`
	background-color: ${props => props.theme.background};
	box-shadow: 0 3px 7px rgba(0, 0, 0, 0.16), 0 3px 7px rgba(0, 0, 0, 0.23);
	overflow: hidden;
	max-width: 720px;
	min-width: 320px;
	border-radius: 8px;
`;

export const ModalContent = styled.div`
	padding: 16px 24px;
`;

export const ModalTitle = styled.h3`
	color: #fff;
  margin: 0;
  font-weight: bold;
`;

export const CloseIcon = styled(FiX)`
	color: #fff;
	cursor: pointer;
`;

