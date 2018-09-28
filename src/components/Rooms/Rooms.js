import React from "react";

class Rooms extends React.Component {
	render() {
		return (
			<div className="rooms-list">
				<ul>
					{this.props.rooms.map((room, index) => {
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
