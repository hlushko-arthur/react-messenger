import React from "react";

class Aside extends React.Component {
	render() {
		return (
			<div className="nav">
				<div className="nav_item">
					Profile
				</div>
				<div className="nav_item">
					Friends
				</div>
				<div className="nav_item">
					Messages
				</div>
			</div>
		);
	}
}

export default Aside;