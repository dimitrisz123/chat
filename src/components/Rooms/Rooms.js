import React from "react";

class Rooms extends React.Component {
	render() {
		const sortedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id);
		return (
			<div className="rooms-list">
				<ul>
					{sortedRooms.map((room, index) => {
						return (
							<li className="room" key={index}>
								<a
									onClick={() =>
										this.props.subscribeToRoom(room.id)
									}
									href="# "
								>
									{room.name}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
export default Rooms;
