import React, { useEffect, useState } from "react";
import Input from "../../components/input/Input";
import userAvatar from "../../assets/icons/user.png";
import "./Messenger.scss";

const Messenger: React.FC = () => {
	const [activeTab, setActiveTab] = useState<'primary' | 'archived'>('primary');

	const [searchText, setSearchText] = useState('');

	return (
		<div data-component='messenger' className="container">
			<div className="aside">
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
							<div className="chat-list_item">
								<div className="chat-list_item_avatar">
									<img src={userAvatar}></img>
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

			<div className="content">
				<div className="user">
					<div className="user_avatar">
						<img src={userAvatar}></img>
					</div>
					<div className="user_name">
							Зозулікк
					</div>
					<div className="user_last-seen">
							last seen yesterday at 10:06 PM
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
					<Input height="60px" placeholder="Type a message..." width="100%" />
				</div>
			</div>
		</div>
	);
};

export default Messenger;