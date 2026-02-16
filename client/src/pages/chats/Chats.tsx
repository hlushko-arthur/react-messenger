import './Chats.scss';
import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const Chats: React.FC = () => {
	const [activeTab, setActiveTab] = useState<'primary' | 'archived'>('primary');

	const [searchText, setSearchText] = useState('');

	const navigate = useNavigate();

	const openChatPage = () => {
		navigate(`/chats/:${245+1122}`);
	};

	return (
		<div data-component='chats' className="container">
			<div className="header">
				<Button link>Edit</Button>
				<span>Chats</span>
				<Button iconUrl="/src/assets/icons/new-message.png"></Button>
			</div>

			<div className="search">
				<Input clearable value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search..." width="100%" />
			</div>

			{
				!searchText &&
				<>
					<div className="tabs">
						<div onClick={() => setActiveTab('primary')} className={`tabs_item ${activeTab === 'primary' ? 'active' : ''}`}>Primary</div>
						<div onClick={() => setActiveTab('archived')} className={`tabs_item ${activeTab === 'archived' ? 'active' : ''}`}>Archived</div>
					</div>

					<div className="chat-list">
						<div onClick={openChatPage} className="chat-list_item">
							<div className="chat-list_item_avatar">
								<img src="/src/assets/icons/user.png"></img>
							</div>
							<div className="chat-list_item_title">yulechka</div>
							<div className="chat-list_item_last-message">
								<div className="chat-list_item_last-message_text">Пук</div>
								<div className="chat-list_item_last-message_date">1w</div>
							</div>
						</div>
					</div>
				</>
			}

			{
				searchText &&
				<div className="global_search">
					<div>
						global search
					</div>
				</div>
			}
		</div>
	);
};

export default Chats;