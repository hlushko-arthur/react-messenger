import React from "react";
import './Input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	width?: string;
	label?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
	return (
		<div className="input-wrapper" style={{ width: props.width }}>
			<input
				placeholder=""
				value={props.value}
				onChange={props.onChange}
				style={{ width: props.width }}
			/>
			<label>{props.label}</label>
		</div>
	);
};

export default Input;