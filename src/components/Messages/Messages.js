import React from "react";

const Messages = props => {
	return (
		<div className="message-list">
			{props.messages.map((message, index) => {
				return (
					<div className="message" key={index}>
						<div className="message-username">
							{message.sender.name}
						</div>
						<div className="message-text">{message.text}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Messages;
