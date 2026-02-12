import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  children: React.ReactNode;
}

class Button extends React.Component<ButtonProps> {
	render() {
 		const { secondary, className } = this.props;

 		const classes = [className, secondary ? 'button-secondary' : ''].filter(Boolean).join(' ');

 		return (
 			<button
				className={classes}
				onClick={this.props.onClick}
				disabled={this.props.disabled}
			>
				{this.props.children}
			</button>
 		);
 	}
}

export default Button;