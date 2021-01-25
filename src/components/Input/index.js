import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import { StyledInput } from './styles';

const Input = ({ name, icon: Icon, ...rest }) => {
	const { fieldName, defaultValue, error, registerField } = useField(name);
	const inputRef = useRef(null);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: "value",
		});
	}, [fieldName, registerField]);

	return (
		<>
			<StyledInput
				defaultValue={defaultValue}
				name={fieldName}
				ref={inputRef}
				{...rest}
			/>

			{error && (
				<p style={{ color: "#f10" }}>
					{error}
				</p>
			)}
		</>
	);
};

export default Input;
