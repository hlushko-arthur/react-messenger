import './Login.scss';
import { useState } from 'react';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import http from '../../../services/http.service';

const Login: React.FC = () => {
	const [activeForm, setActiveForm] = useState<'login' | 'register'>('login');

	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const [name, setName] = useState('');

	const [formMessage, setFormMessage] = useState<string>('');

	const isLoginButtonDisabled = !email || !password;

	const isSignupButtonDisabled = !email || !password || !name;

	const changeForm = () => {
		setActiveForm(prev => prev === 'login' ? 'register' : 'login');
	};

	const login = async () => {
		console.log(email, password);

		const res = await http.post('/auth/login', {
			email,
			password,
		});

		if (!res.data.status) {
			setFormMessage(res.data.message);

			return;
		}

		localStorage.setItem('token', res.data.token);
	};

	const signup = async () => {
		const res = await http.post('/auth/register', {
			email,
			password,
			name,
		});
	};

	const formLogin = () => (
		<div className='form_login'>
			<Input
				label="Email"
				width="364px"
				value={email}
				onChange={(e) => setEmail(e.target.value)}/>
			<Input
				label="Password"
				width="364px"
				value='12312312'
				onChange={(e) => setPassword(e.target.value)}/>

			<div className="a-wrapper">
				<a>Forgot password?</a>
			</div>

			<Button
				className="login-button"
				onClick={login}
				disabled={isLoginButtonDisabled}
			>
					Log In
			</Button>

			<Button
				secondary
				onClick={changeForm}
			>
				Create new account
			</Button>
		</div>
	);

	const formRegister = () => (
		<div className='form_register'>
			<Input
				label="Email"
				width="364px"
				value={email}
				onChange={(e) => setEmail(e.target.value)}/>
			<Input
				label="Password"
				width="364px"
				value={password}
				onChange={(e) => setPassword(e.target.value)}/>
			<Input
				label="Name"
				width='364px'
				value={name}
				onChange={(e) => setName(e.target.value)}/>

			<Button
				className="signup-button"
			 onClick={signup}
			 disabled={isSignupButtonDisabled}
			 >
				Sign Up
			</Button>
			<Button secondary onClick={changeForm}>
				I already have an account
			</Button>
		</div>
	);

	return (
		<div className='container'>
			<div className='logo'>EiChat</div>
			<div className='form'>
				<div className='form_message'>
					The password you have entered is incorrect.
				</div>

				{activeForm === 'login' ? formLogin() : formRegister()}
			</div>
		</div>
	);
};

export default Login;