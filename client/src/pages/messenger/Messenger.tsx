import React from "react";
import "./Messenger.scss";

class Messenger extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="tabs">
					<div className="tabs_item">Primary</div>
					<div className="tabs_item">Archived</div>
				</div>
			</div>
		);
	}
}

export default Messenger;