import { Outlet, useNavigate } from 'react-router-dom';
import './Footer.scss';

const Footer: React.FC = () => {
	const navigate = useNavigate();

	const openContactsPage = () => {
		navigate('/contacts');
	};

	const openChatsPage = () => {
		navigate('/chats');
	};

	const openSettingsPage = () => {
		navigate('/settings');
	};

	return (
		<>
			<Outlet></Outlet>

			<footer className='footer'>
				<div onClick={openContactsPage} className='footer_item'>
					Contacts
				</div>
				<div onClick={openChatsPage} className='footer_item'>
					Chats
				</div>
				<div onClick={openSettingsPage} className='footer_item'>
					Settings
				</div>
			</footer>
		</>
	);
};

export default Footer;