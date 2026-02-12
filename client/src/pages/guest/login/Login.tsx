import './Login.scss';
import React from 'react';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';

class Login extends React.Component {

	render() {
		return (
			<div className='container'>
				<div className="logo">EiChat</div>
				<div className='form'>
					<div className='form_login'>
						<Input label="Email" width="364px"></Input>
						<Input label="Password" width="364px"></Input>

						<div className="a-wrapper">
							<a>Forgot password?</a>
						</div>

						<Button>Log In</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;