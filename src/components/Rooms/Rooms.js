import React from "react";

class Rooms extends React.Component {
	render() {
		return (
			<div className="rooms-list">
				<ul>
					{this.props.rooms.map((room, index) => {
						return (
							<li className="room" key={index}>
								<button
									onClick={() =>
										this.props.subscribeToRoom(room.id)
									}
								>
									{room.name}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
export default Rooms;
