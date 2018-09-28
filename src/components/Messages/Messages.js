import React from "react";

class Messages extends React.Component {
	render() {
		return (
			<div id="content" className="message-list">
				{this.props.messages.map((message, index) => {
					return (
						<div className="message" key={index}>
							<div className="message-username">
								{message.senderId}
							</div>
							<div className="message-text">{message.text}</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Messages;
