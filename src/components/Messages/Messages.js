import React from "react";

const Messages = props => {
	console.log(props);
	return (
		<div className="message-list">
			{props.messages.map((message, index) => {
				return (
					<div className="message" key={index}>
						<div className="message-username">
							{message.senderId.split(".", 1)}
						</div>
						<div className="message-text">{message.text}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Messages;
