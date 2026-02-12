import React from "react";
import './Input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string;
	width?: string;
	label?: string;
}

class Input extends React.Component<InputProps> {

	static defaultProps: InputProps = {
		// placeholder: "Write here...",
		width: '192px',
		label: 'test',
	};

	render() {
		return (
			<div className="input-wrapper" style={{width: this.props.width}}>
				<input placeholder="" style={{width: this.props.width}}></input>
				<label>{this.props.label}</label>
			</div>
		);
	}
}

export default Input;