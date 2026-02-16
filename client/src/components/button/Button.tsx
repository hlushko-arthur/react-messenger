import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  link?: boolean;
  iconUrl?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
	const classes = [
		props.className,
		props.secondary ? 'button-secondary' : '',
		props.link ? 'button-link' : '',
		props.iconUrl ? 'button-icon' : '',
	].filter(Boolean).join(' ');

	console.log(props.iconUrl);

	return (
		<button
			className={classes}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
			{
				props.iconUrl &&
				<img src={props.iconUrl}></img>
			}
		</button>
	);
};

export default Button;