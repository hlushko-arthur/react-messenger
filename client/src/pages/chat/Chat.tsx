import Input from '../../components/input/Input';
import './Chat.scss';
import userAvatar from '../../assets/icons/user.png';
import arrowLeft from '../../assets/icons/arrow-left.png';
import { useNavigate } from 'react-router-dom';

const Chat: React.FC = () => {
	const navigate = useNavigate();

	const openChatsPage = () => {
		navigate('/chats');
	};

	return (
		<div data-component='chat' className="container">
			<div className="user">
				<div onClick={openChatsPage} className="user_back-button">
					<img src={arrowLeft}/>
					Back
				</div>
				<div className="user_name">
						Зозулікк
				</div>
				<div className="user_last-seen">
						last seen yesterday at 10:06 PM
				</div>
				<div className="user_avatar">
					<img src={userAvatar}></img>
				</div>
			</div>

			<div className="chat">
				<div className="chat_message from">
					<div className="chat_message_text">
							А з чим бургер
					</div>
					<div className="chat_message_date">
							11:10 AM
					</div>
				</div>

				<div className="chat_message to">
					<div className="chat_message_text">
							З ковбасою
					</div>
					<div className="chat_message_date">
							10:11 AM
					</div>
				</div>

			</div>

			<div className="input-message">
				<Input placeholder="Type a message..." width="100%" />
			</div>
		</div>
	);
};

export default Chat;