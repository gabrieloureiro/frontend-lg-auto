import React from 'react'
import { StyledButton } from './styles';

const FormButton = ({ cancel, children, onClose, onSubmit, ...rest }) => {
	return (
		<StyledButton
			{...rest}
			cancel={cancel}
			onClick={cancel ? onClose : onSubmit}
		>
			{children}
		</StyledButton>
	)
}

export default FormButton
