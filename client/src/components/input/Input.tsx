import React from "react";
import './Input.scss';
import eyeIcon from '../../assets/icons/eye.png';
import eyeclosedIcon from '../../assets/icons/eye-closed.png';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	width?: string;
	label?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
	const [isShowPassword, setIsShowPassword] = React.useState(false);

	const togglePasswordVisibility = () => {
		setIsShowPassword(prev => !prev);
	};

	return (
		<div className="input-wrapper" style={{ width: props.width }}>
			<input
				type={isShowPassword ? 'text' : props.type || "text"}
				placeholder=""
				name={props.name}
				value={props.value}
				onChange={props.onChange}
				style={{ width: props.width }}
			/>
			<label>{props.label}</label>
			{
				props.type === "password" &&
				<span onClick={togglePasswordVisibility} className="password-toggle">
					<img src={isShowPassword ? eyeclosedIcon : eyeIcon}></img>
				</span>
			}
		</div>
	);
};

export default Input;