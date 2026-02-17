import { useState } from 'react';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import http from '../../../services/http.service';
import AuthService from '../../../services/auth.service';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

interface User {
	email: string;
	password: string;
	name: string;
	username: string;
}

const Login: React.FC = () => {
	const navigate = useNavigate();

	const [activeForm, setActiveForm] = useState<'login' | 'register'>('login');

	const [user, setUser] = useState<User>({
		email: '',
		password: '',
		name: '',
		username: '',
	});

	const [formMessage, setFormMessage] = useState<string>('');

	const isLoginButtonDisabled = !user.email || !user.password;

	const isSignupButtonDisabled = !user.email || !user.password || !user.name;

	const changeForm = () => {
		setFormMessage('');

		setActiveForm(prev => prev === 'login' ? 'register' : 'login');
	};

	const handleUserChange = <K extends keyof User>(field: K, value: User[K]) => {
		setUser(prev => ({
			...prev,
			[field]: value,
		}));
	};

	const login = async () => {
		const res = await AuthService.login(user);

		if (!res.success) {
			setFormMessage(res.message);

			return;
		}

		navigate('/chats');
	};

	const signup = async () => {
		const res = await http.post('/auth/register', user);
	};

	const formLogin = () => (
		<div className='form_login'>
			<Input
				label="Email"
				name="email"
				value={user.email}
				onChange={(e) => handleUserChange('email', e.target.value)}/>
			<Input
				label="Password"
				type="password"
				value={user.password}
				onChange={(e) => handleUserChange('password', e.target.value)}/>

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
				value={user.email}
				onChange={(e) => handleUserChange('email', e.target.value)}/>
			<Input
				label="Password"
				type="password"
				value={user.password}
				onChange={(e) => handleUserChange('password', e.target.value)}/>
			<Input
				label="Name"
				value={user.name}
				onChange={(e) => handleUserChange('name', e.target.value)}/>
			<Input
				label="Username"
				value={user.username}
				onChange={(e) => handleUserChange('username', e.target.value)}/>

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
		<div data-component="login" className='container'>
			<div className='logo'>EiChat</div>
			<div className='form'>
				<div className='form_message'>
					{ formMessage }
				</div>

				{activeForm === 'login' ? formLogin() : formRegister()}
			</div>
		</div>
	);
};

export default Login;