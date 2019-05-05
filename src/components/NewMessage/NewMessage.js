import React from "react";

const NewMessage = ({ sendMessage, inputMessage, value, disabled }) => {
	return (
		<form className="input" onSubmit={sendMessage}>
			<input
				placeholder="Enter a message"
				className="input"
				type="text"
				onChange={inputMessage}
				value={value}
				disabled={disabled}
			/>
		</form>
	);
};
export default NewMessage;
