import React, { useState, useRef, useEffect } from "react";
import { useField } from "@unform/core";
import { StyledInput } from './styles';

const Input = ({ name, fieldError, placeholder, icon: Icon, ...rest }) => {
	const [containsError, setContainsError] = useState(false);
	const { fieldName, defaultValue, error, registerField } = useField(name);
	const inputRef = useRef(null);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: "value",
		});
	}, [fieldName, registerField]);

	useEffect(() => {
		if (error) {
			setContainsError(true)
		}
	}, [error])

	useEffect(() => {
		if (!error) {
			setContainsError(false)
		}
	}, [error])

	return (
		<>
			<StyledInput
				onChange={(event) => {
					event.target.value !== "" ?
						setContainsError(false) :
						setContainsError(true)
				}}
				defaultValue={defaultValue}
				name={fieldName}
				ref={inputRef}
				fieldError={containsError}
				placeholder={containsError ? error : placeholder}
				{...rest}
			/>
		</>
	);
};

export default Input;
