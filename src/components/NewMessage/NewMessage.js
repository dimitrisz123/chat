import React from "react";

const NewMessage = props => {
	return (
		<form className="input" onSubmit={props.sendMessage}>
			<input
				placeholder="Enter a message"
				className="input"
				type="text"
				onChange={props.inputMessage}
				value={props.value}
				disabled={props.disabled}
			/>
		</form>
	);
};
export default NewMessage;
