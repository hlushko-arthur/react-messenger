import React from "react";
import './Input.scss';
import eyeIcon from '../../assets/icons/eye.png';
import eyeclosedIcon from '../../assets/icons/eye-closed.png';
import crossMark from '../../assets/icons/cross-mark.png';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	width?: string;
	label?: string;
	value?: string;
	clearable?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
	const [isShowPassword, setIsShowPassword] = React.useState(false);

	const classes = `input ${props.placeholder ? 'input_without-label' : ''}`;

	const togglePasswordVisibility = () => {
		setIsShowPassword(prev => !prev);
	};

	const clearValue = () => {
		if (!props.onChange) return;

		const event = {
			target: { value: "" },
		} as React.ChangeEvent<HTMLInputElement>;

		props.onChange(event);
	};

	return (
		<div className="input-wrapper" style={{ width: props.width }}>
			<input
				type={isShowPassword ? 'text' : props.type || "text"}
				className={classes}
				placeholder={props.placeholder || ''}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
				style={{ width: props.width, height: props.height}}
			/>
			{
				props.clearable &&
				props.value &&
				<div className="clear-wrapper">
					<img onClick={clearValue} src={crossMark} />
				</div>
			}
			{
				!props.placeholder &&
				<label>{props.label}</label>
			}
			{
				props.type === "password" &&
				<span onClick={togglePasswordVisibility} className="password-toggle">
					<img src={isShowPassword ? eyeclosedIcon : eyeIcon}></img>
				</span>
			}
		</div>
	);
};

(Input as any).defaultProps = {
	clearable: true,
};

export default Input;