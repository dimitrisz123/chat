import React from "react";

const Addroom = props => {
	return (
		<div className="add-room">
			<form onSubmit={props.createRoom}>
				<input
					placeholder="Enter a room name"
					className="input"
					type="text"
					onChange={props.inputRoom}
					value={props.value}
				/>
			</form>
		</div>
	);
};
export default Addroom;
