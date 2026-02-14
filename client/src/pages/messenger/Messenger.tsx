import React from "react";
import "./Messenger.scss";
import userAvatar from "../../assets/icons/user.png";

chats;

class Messenger extends React.Component {
	render() {
		return (
			<div data-component='messenger' className="container">
				<div className="aside">
					<div className="tabs">
						<div className="tabs_item active">Primary</div>
						<div className="tabs_item">Archived</div>
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
				</div>

				<div className="content">
					content
				</div>
			</div>
		);
	}
}

export default Messenger;