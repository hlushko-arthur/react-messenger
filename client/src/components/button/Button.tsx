import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  children: React.ReactNode;
}

class Button extends React.Component<ButtonProps> {
	render() {
		const { secondary } = this.props;

		return (
			<button className={secondary ? 'button-secondary' : ''}>{this.props.children}</button>
		);
	}
}

export default Button;