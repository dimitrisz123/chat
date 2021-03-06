import React from "react";

const Messages = props => {
	return (
		<div className="message-list">
			{props.messages.map((message, index) => {
				return (
					<div className="message" key={index}>
						<div className="message-username">
							{message.senderId}
						</div>
						<div className="message-text">
							{message.parts[0].payload.content}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Messages;
