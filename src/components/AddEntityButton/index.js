import React from 'react';
import { Button, Row, PlusIcon, Tooltip } from './styles';



const AddEntityButton = ({ onClick, ...rest }) => {
	return (
		<Row full end relative>
			<Button onClick={onClick} {...rest}>
				<PlusIcon size={24} />
			</Button>
		</Row>
	)
}

export default AddEntityButton
